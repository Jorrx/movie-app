import React, { useEffect } from 'react'
import { authRoutes, publicRoute } from '../router/index'
import { Navigate, Route, Routes, useLocation, useNavigate  } from 'react-router-dom'
import Error from '../pages/Error/Error'
import { userCheckAuth } from '../store/reducers/actionCreator'
import { useDispatch } from 'react-redux'
import MyLoader from './UI/MyLoader/MyLoader'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/routes'
import {useAppSelector} from "../hooks/redux";

const AppRouter = () => {
    const auth = useAppSelector(state => state.authReducer)
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkAuth = async () => {
        try {
            await dispatch(userCheckAuth());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth();
        }
    }, [auth.auth]);

    if (auth.isLoading) {
        return <MyLoader />
    }

    if((location.pathname === LOGIN_ROUTE || location.pathname ===  REGISTER_ROUTE) && auth.auth){
        navigate(HOME_ROUTE)
    }

    return (
        <Routes>
            {!auth.auth && authRoutes.map(({ path, Element }) =>{
                if(location.pathname === HOME_ROUTE){
                    return <Route key={path} path="/" element={<Navigate to={LOGIN_ROUTE} />} />
                }
                return <Route key={path} path={path} element={<Element />} />
            })}
            {auth.auth && publicRoute.map(({ path, Element }) =>
                <Route key={path} path={path} element={<Element />} />
            )}
            <Route path='*' element={<Error />} />
        </Routes>
    );
};

export default AppRouter;