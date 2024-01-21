import React, {memo, useCallback, useState} from 'react';
import styles from './Header.module.scss'
import {Link, useNavigate, useLocation} from "react-router-dom";
import SearchFilms from "../searchMovie/SearchFilms";
import {FILMS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../../utils/routes";
import {setVisible} from '../../store/reducers/searchSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {userLogout} from '../../store/reducers/actionCreator';
import search from '../../assets/search.svg'
import cancel from '../../assets/cancel.png'
import {navigationLinks} from "../../router";


const Header = () => {
    const dispatch = useAppDispatch()
    const {visible} = useAppSelector(state => state.searchReducer)
    const navigate = useNavigate()
    const searchImg = !visible ? search : cancel
    const [mbHeaderIsActive, setMbHeaderIsActive] = useState<string>('')
    const headerClass = !visible ? [styles.header, styles[mbHeaderIsActive]] : [styles.header, styles[mbHeaderIsActive], styles.header_active]
    const location = useLocation()

    const searchActivate = useCallback(async () => {
        dispatch(setVisible(!visible))
    }, [visible])

    const logout = useCallback(async () => {
        try {
            await dispatch(userLogout())
            navigate(LOGIN_ROUTE)
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <>
            <h2 className={styles.menuBar} onClick={() => {
                mbHeaderIsActive
                    ?
                    setMbHeaderIsActive('')
                    :
                    setMbHeaderIsActive('smHeader')
            }}>Menu</h2>
            {<header className={headerClass.join(' ')}>
                <Link to={'/'} className={styles.logo}>MovieApp</Link>
                {<Link to={PROFILE_ROUTE} className={styles.logo}>Profile</Link>}
                <nav className={styles.nav}>
                    {
                        visible
                            ?
                            (!mbHeaderIsActive && <SearchFilms/>)
                            :
                            <ul className={styles.ul}>
                                {navigationLinks.map(({path, name}) =>
                                    <li key={path}>
                                        <Link to={path} className={styles.nav_links}>{name}</Link>
                                    </li>
                                )}
                            </ul>
                    }
                    <div>
                        <img src={searchImg} onClick={searchActivate} alt='searchImg'/>
                    </div>
                    <div>
                        <p className={styles.nav_links} onClick={logout}>Log out</p>
                        {visible && (mbHeaderIsActive && <SearchFilms/>)}
                    </div>
                </nav>

            </header>}
        </>
    );
};

export default memo(Header);