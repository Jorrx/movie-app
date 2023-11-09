import React, {memo, useEffect, useState} from 'react';
import {movieApi} from "../../services/MovieServices";
import {useParams} from "react-router-dom";
import NewMoviesItem from "../../components/NewMoves/NewMoviesItem";
import styles from './MovieByGenre.module.scss'
import HomeMovieItem from "../../components/HomeMovieItems/HomeMovieItem";
import {genres} from "../../utils/genres";

const MovieByGenre = () => {
    const {id} = useParams()

    const [page, setPage] = useState(1)
    const {data, error, isLoading} = movieApi.useGetByGenreQuery(id)

    return (

        isLoading ? (<h2 style={{color: "white", background: 'white'}}>
                Loading...
            </h2>)
            :
            <div className={'container'}>
                <h2>{genres['12']}</h2>
                <div className={styles.movie}>
                    {data?.results.map((movie) => {
                        return (movie.poster_path && movie.backdrop_path) &&
                            <div className={styles.movieItem} key={movie.id}>
                                <HomeMovieItem movie={movie}/>
                            </div>
                    })}
                </div>
            </div>
    )
};

export default MovieByGenre