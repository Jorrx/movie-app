import React from 'react';
import MyButton from "../UI/MyButton/MyButton";
import styles from './Auth.module.scss'

const Register = () => {
    return (
        <div className={styles.auth}>
            <input type="text" placeholder={'Enter your email'}/>
            {/*<input type="text"/>*/}
            <input type="password" placeholder={'create new Password'}/>
            <input type="password" placeholder={'Confirm Password'}/>
            <MyButton >Submit</MyButton>
        </div>
    );
};

export default Register;