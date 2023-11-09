import {Interface} from 'readline'
import {IMovieCorrect, IMovies} from '../../types/types'
import {useParams} from "react-router-dom";
import React, {FC, useEffect, useState} from 'react'
import movieRequests from '../../requets/requst'
import axios from "axios";
import styles from './Movie.module.scss'


const Movie: FC = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState<IMovieCorrect | null>(null)

    const getMovie = async () => {
        const requestHeader = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDM3NGQ5Mzc4OGZmNTQ5NGZkNWU3ZTViNDNkNWYxNyIsInN1YiI6IjYzZGE2OTAyMjJkZjJlMDA4Y2NhZDRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVX1OTXOqmroHxqDAIw4_OzoV4OhCw8hdqlXSUeK6-c'
            }
        }
        try {
            const req = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, requestHeader)
            const {data} = req
            console.log(data)
            setMovie(data)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getMovie()
    }, [])

    return <div className={styles.movie_Item} style={{color: 'white'}}>
        {movie?.id
        &&
        <div className={'movie_item_inner'}
             style={{background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
            <div className={styles.movie_info}>
                <div>
                    {movie.overview}
                </div>
                <div>
                    {movie?.production_companies[0]?.name}
                </div>
            </div>
        </div>}
    </div>
}


export default Movie