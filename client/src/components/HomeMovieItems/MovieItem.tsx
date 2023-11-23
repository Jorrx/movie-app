import React, {useState} from 'react'
import styles from './MovieItem.module.scss'
import {IMovies} from '../../types/types'
import {Link} from "react-router-dom";
import {FILM_ITEM_ROUTE} from "../../utils/routes";


interface HomeMovieItemsProps {
    movie: IMovies
    backdrop_path?:string
    className?:string
}

export default function MovieItem({backdrop_path,className, ...props}: HomeMovieItemsProps) {

    const ImgPath = backdrop_path || props.movie.poster_path
    return (
        <Link to={`${FILM_ITEM_ROUTE}/${props.movie.id}`} className={styles[`${className}`]}>
            <div className={styles.main_movie_listItem} style={{
                background: `url(https://image.tmdb.org/t/p/${className === 'mySwiper' ? 'original' : 'w400'}/${ImgPath})`
            }}>
                <div>
                    <p>{props.movie.title}</p>
                    <div>
                        <span className={styles.vote_average}>
                            {props.movie.vote_average.toFixed(1)}
                        </span>
                        <span>{props.movie.release_date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

