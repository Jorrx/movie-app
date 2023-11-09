import React, { useState } from 'react';
import './Header.scss'
// import search from './search.svg'
const Header = () => {

    const [searchIsOn, setSearchIsOn] = useState(false)

    const headerClass = searchIsOn ? 'header active' : 'header'
    const seachImg = !searchIsOn ? './assets/search.svg' : './assets/cancel.png'
    
    return (
        <header className={headerClass}>
            <a href='/#' className='logo' >MovieApp</a>
            <nav className='nav'>
                {
                    searchIsOn
                        ?
                        <div className='search'>
                             {/*<img src={search} />*/}
                            <input type="text" placeholder='value...'/>
                        </div>
                        :
                        <ul className='ul'>
                            <li><a href="/#" className='nav_links'>Main</a></li>
                            <li><a href="/#" className='nav_links'>Catalog</a></li>
                            <li><a href="/#" className='nav_links'>Shop</a></li>
                            <li><a href="/#" className='nav_links'>TV channels</a></li>
                        </ul>
                }
                <div className='header-right active'>
                    <div>
                        <img src={seachImg} onClick={() => {
                            searchIsOn ? setSearchIsOn(false) : setSearchIsOn(true)
                        }} alt='searchImg'/>
                    </div>
                    <a href='/#' className='nav_links'>Enter the promo</a>
                    <a href='/#' className='nav_links'>Log in</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;