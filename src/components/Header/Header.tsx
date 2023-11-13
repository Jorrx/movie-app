import React, {useState} from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import SearchFilms from "../searchMovie/SearchFilms";
import {AUTH_ROUTE} from "../../utils/routes";
import { setVisible } from '../../store/reducers/searchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import search from './search.svg'
const Header = () => {

    const [searchIsOn, setSearchIsOn] = useState(false)
    const dispatch = useAppDispatch()
    const {visible} = useAppSelector(state => state.searchReducer)
    const headerClass = !visible ? [styles.header] : [styles.header, styles.header_active]
    const searchImg = !visible ? './assets/search.svg' : './assets/cancel.png'

    const searchActivate = () =>{
        dispatch(setVisible(!visible))
    }
    
    return (
        <header className={headerClass.join(' ')}>
            <Link to={'/'} className={styles.logo}>MovieApp</Link>
            <nav className={styles.nav}>
                {
                    visible
                        ?
                        <SearchFilms/>
                        :
                        <ul className={styles.ul}>
                            <li>
                                <Link to="/#" className={styles.nav_links}>Main</Link>
                            </li>
                            <li>
                                <Link to="/#" className={styles.nav_links}>Movies</Link>
                            </li>
                        </ul>
                }
                <div>
                    <img src={searchImg} onClick={searchActivate} alt='searchImg'/>
                </div>
                <div className={''}>
                    <Link to={AUTH_ROUTE} className={styles.nav_links}>Log in</Link>
                </div>
            </nav>

        </header>
    );
};

export default Header;