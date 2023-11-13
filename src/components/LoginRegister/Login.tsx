import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import styles from './Auth.module.scss'

const Login = () => {
    return (
        <div>
            <div className={styles.auth}>
                <input type="text" placeholder='Enter your Email'/>
                <input type="password" placeholder='Enter your Password'/>
                <MyButton>Submit</MyButton>
            </div>
        </div>
    );
};

export default Login;