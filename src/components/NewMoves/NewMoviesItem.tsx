import React, {FC} from 'react';


import styles from './NewMovies.module.scss'

import {IMovies} from "../../types/types";
import {SwiperSlide} from "swiper/react";

interface MoviesItemsProps {
    movie: IMovies
    poster_path?:boolean
}

export default function NewMoviesItem({poster_path,...props}: MoviesItemsProps) {
    return (
        <a href={`/movie/${props.movie.id}`}>
            <div className={styles.main_slider_items} style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`
            }}>
                <div className={styles.main_slider_items_info}>
                    <p>{props.movie.original_title}</p>
                    <div className={poster_path ? styles.poster_path : ''}>
                            <span className={styles.vote_average}>
                                {props.movie.vote_average.toFixed(1) }
                            </span>
                        <span>{props.movie.release_date}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}
