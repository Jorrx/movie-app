import React, { useEffect, useMemo, useState } from 'react';
import MyButton from "../UI/MyButton/MyButton";
import styles from './Auth.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userCheckAuth, userLogin, userRegistration } from '../../store/reducers/actionCreator';
import MyInput from '../UI/MyInput/MyInput';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, REGISTER_ROUTE } from '../../utils/routes';
import MyLoader from '../UI/MyLoader/MyLoader';
import { refreshErrorData } from '../../store/reducers/authSlice';

export type ILogin = {
    email: string,
    password: string,
}


const Login = () => {
    const [loginData, setLoginData] = useState<ILogin>({
        email: 'Jorr@gmail.com',
        password: 'JorrJorr',
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.authReducer)



    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            dispatch(userLogin(loginData));
            navigate(HOME_ROUTE);
        } catch (err) {
            console.log(err)
        }
    };

    const navigateTo = () => {
        navigate(REGISTER_ROUTE)
        dispatch(refreshErrorData())
    }

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>, el: string) => {
        setLoginData((prevState) => ({
            ...prevState,
            [el]: e.target.value,
        }));
    };


    if (user.isLoading) {
        return <MyLoader />
    }


    return (
        <form className={styles.auth} onSubmit={login}>
            <span className={styles.errors}>{user.isError.message}</span>

            <MyInput type="text" placeholder={'Enter your email'} onChange={(e) => {
                handleFullNameChange(e, 'email')
            }} value={loginData.email} />
            <MyInput type="password" placeholder={'Create Password'} onChange={(e) => {
                handleFullNameChange(e, 'password')
            }} value={loginData.password} />
            <span onClick={navigateTo}>Create Account</span>
            {user.isError?.errors.map(el =>
                <span className={styles.errors}>{el.msg}:{el.path}</span>
            )}
            <MyButton>Submit</MyButton>
        </form>
    );
};

export default Login;