import React, {memo} from 'react'
import {useAppSelector} from '../../hooks/redux'
import styles from '../../components/FilmsFilms/Movies.module.scss'
import MovieLists from "../../components/MovieLists/MovieLists";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/routes";

const User = () => {
    const user = useAppSelector(state => state.authReducer)

    return (
        <div className={styles.profile}>
            <Link to={HOME_ROUTE}>Home Page</Link>
            <span>Profile</span>

            {user && <p>{user?.user?.fullName}</p>}
            <Link to={'/Favorites'} className={styles.item}>Favourites</Link>
            <div className={styles.movies}>
                <div className={[styles.movie , styles.movieProfile].join(' ')}>
                    {user.user?.savedMovies?.length &&
                    <MovieLists movies={user.user?.savedMovies} className={'film_page_items'}/>}
                </div>
            </div>
        </div>
    )
}

export default memo(User)
