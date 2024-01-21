import React, { useEffect } from 'react';
import Login from "../../components/LoginRegister/Login";
import Register from "../../components/LoginRegister/Register";
import styles from './Auth.module.css'
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/routes';
import { useAppSelector } from '../../hooks/redux';

const Auth = () => {
  const { auth } = useAppSelector(state => state.authReducer)
  const location = useLocation()
  
  return (
    <div className={styles.auth}>
      <div>
        {location.pathname === LOGIN_ROUTE ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;