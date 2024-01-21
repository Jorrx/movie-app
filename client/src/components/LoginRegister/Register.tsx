import React, { useEffect, useState } from 'react';
import MyButton from "../UI/MyButton/MyButton";
import styles from './Auth.module.scss'
import axios from 'axios'
import MyInput from '../UI/MyInput/MyInput'
import { userRegistration } from '../../store/reducers/actionCreator';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Link, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../utils/routes';
import { refreshErrorData } from '../../store/reducers/authSlice';


export interface IRegister {
    fullName: string,
    email: string,
    password: string,
}

const Register = () => {

    const [registerData, setRegisterData] = useState<IRegister>({
        fullName: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.authReducer)

    const navigateTo = () => {
        dispatch(refreshErrorData())
        navigate(LOGIN_ROUTE)
    }

    const registration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            await dispatch(userRegistration(registerData))
    };

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>, el: string) => {

        setRegisterData((prevState) => ({
            ...prevState,
            [el]: e.target.value,
        }));
    };

    if(user.auth){
        console.log('NAVIGATE to home page')
    }


    return (
        <form className={styles.auth} onSubmit={registration} >
            <span className={styles.errors}>{user.isError.message}</span>
            <MyInput type="text" placeholder={'Enter your Name'} onChange={(e) => {
                handleFullNameChange(e, 'fullName')
            }} value={registerData.fullName} />
            <MyInput type="text" placeholder={'Enter your email'} onChange={(e) => {
                handleFullNameChange(e, 'email')
            }} value={registerData.email} />
            <MyInput type="password" placeholder={'Create Password'} onChange={(e) => {
                handleFullNameChange(e, 'password')
            }} value={registerData.password} />
            <span onClick={navigateTo}>Sign in</span>
            {user.isError?.errors.map(el =>
                <span className={styles.errors}>{el.msg}:{el.path}</span>
            )}
            {/* <MyInput type='password' placeholder={'Confirm Password'} onChange={(e) => setRegisterData(e.target.value)} /> */}
            <MyButton>Submit</MyButton>
        </form>
    );
};

export default Register;