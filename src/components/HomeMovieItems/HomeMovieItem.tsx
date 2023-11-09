import React, { useState } from 'react'
import styles from './HomeMovieItem.module.scss'
import { IMovies } from '../../types/types'


interface HomeMovieitemsProps {
    movie: IMovies
}

export default function HomeMovieItem(props: HomeMovieitemsProps) {
    const [isCheck , setIsCheck] = useState(null)
    const [current , setCurrent] = useState(null)

    return (
        <a href={`/movie/${props.movie.id}`}>
            <div className={styles.main_slider_items} style={{
                background: `url(https://image.tmdb.org/t/p/original/${props.movie.poster_path })`
            }}>
                <div className={styles.main_slider_items_info}>
                    <p>{props.movie.original_title}</p>
                    <div className={''}>
                        <span className={styles.vote_average}>
                            {props.movie.vote_average.toFixed(1)}
                        </span>
                        <span>{props.movie.release_date}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

