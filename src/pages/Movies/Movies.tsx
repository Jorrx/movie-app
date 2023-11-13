import React, { memo, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { INewMovie, movieApi } from "../../services/MovieServices";
import { useParams } from "react-router-dom";
import styles from './Movies.module.scss'
import MovieItem from "../../components/HomeMovieItems/MovieItem";
import { genres } from "../../utils/genres";
import MyLoader from "../../components/UI/MyLoader/MyLoader";
import { IMovies } from "../../types/types";
import { useObserver } from "../../hooks/useObserver";
import ParentComponent from "../../components/MovieFilter/ParentComponent";


const Movies = () => {
    const { id } = useParams() //37
    const [movies, setMovies] = useState<IMovies[]>([])
    const [page, setPage] = useState<number>(1)
    const lastElementCurrent = useRef<HTMLDivElement | null>(null);
    const prevIdRef = useRef<string | undefined>(undefined);

    const { data, error, isLoading, isSuccess } = movieApi.useGetByGenreQuery({ id, page }) // 20[item]



    useEffect(() => {
        if (movies.length && isSuccess) {
            if (id !== prevIdRef.current) {
                setMovies([...data.results])
                console.log('setMovies[]');

            } else {
                setMovies((prevMovies) => [...prevMovies, ...data.results])
            }
            prevIdRef.current = id
        } else if (data?.results.length !== undefined) {
            setMovies(data?.results)
        }
    }, [data, id])


    useObserver(lastElementCurrent, page, isLoading, () => {
        setPage((prev) => prev + 1)
    })


    if (isLoading) {
        return <MyLoader />
    }

    if (error) {
        return <div>
            Error
        </div>
    }

    return (
        isLoading ? (<MyLoader />)
            :
            <div className={'container'}>
                <ParentComponent />
                <h2 style={{ color: 'white' }}>{id && genres[id]}</h2>
                <div className={styles.movies}>
                    <div className={styles.movie}>
                        {movies?.map((movie) => {
                            return (movie.poster_path && movie.backdrop_path) &&
                                <MovieItem key={movie.id} movie={movie} className={'film_page_items'} />
                        })}
                    </div>
                </div>
                <div ref={lastElementCurrent} className={styles.FilmsLoader}>Loading...</div>
            </div>

    )
};

export default memo(Movies)