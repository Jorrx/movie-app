import React, {useState} from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
// import search from './search.svg'
const Header = () => {

    const [searchIsOn, setSearchIsOn] = useState(false)

    const headerClass = !searchIsOn ? [styles.header] : [styles.header, styles.header_active]
    const searchImg = !searchIsOn ? './assets/search.svg' : './assets/cancel.png'

    return (
        <header className={headerClass.join(' ')}>
            <Link to={'/'} className={styles.logo}>MovieApp</Link>
            <nav className={styles.nav}>
                {
                    searchIsOn
                        ?
                        <div className={styles.search}>
                            <input type="text" placeholder='value...'/>
                        </div>
                        :
                        <ul className={styles.ul}>
                            <li>
                                <Link to="/#" className={styles.nav_links}>Main</Link>
                            </li>
                            <li>
                                <Link to="/#" className={styles.nav_links}>Catalog</Link>
                            </li>
                            <li>
                                <Link to="/#" className={styles.nav_links}>Shop</Link>
                            </li>
                            <li>
                                <Link to="/#" className={styles.nav_links}>TV channels</Link>
                            </li>
                        </ul>
                }
                <div>
                    <img src={searchImg} onClick={() => {
                        searchIsOn ? setSearchIsOn(false) : setSearchIsOn(true)
                    }} alt='searchImg'/>
                </div>
                <div className={''}>
                    <Link to={'/'} className={styles.nav_links}>Enter the promo</Link>
                    <Link to={'/Auth'} className={styles.nav_links}>Log in</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;