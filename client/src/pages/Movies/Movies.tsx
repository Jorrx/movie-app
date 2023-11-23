import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { movieApi } from "../../services/MovieServices";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import styles from './Movies.module.scss'
import MovieItem from "../../components/HomeMovieItems/MovieItem";
import { genres } from "../../utils/genres";
import MyLoader from "../../components/UI/MyLoader/MyLoader";
import { IMovies } from "../../types/types";
import { useObserver } from "../../hooks/useObserver";
import ParentComponent from "../../components/MovieFilter/ParentComponent";
import { useAppSelector } from '../../hooks/redux';
import { setRating } from '../../store/reducers/filterSlice';
import { useDispatch } from 'react-redux';


const Movies = () => {
    const { id } = useParams() //37
    const [movies, setMovies] = useState<IMovies[]>([])
    const [page, setPage] = useState<number>(1)
    const lastElementCurrent = useRef<HTMLDivElement | null>(null);
    const filter = useAppSelector(state => state.filterReducer)
    const [searchParams, setSearchParams] = useSearchParams()
    const { data, error, isLoading, isSuccess } = movieApi.useGetByGenreQuery({ id, page, filter }) // 20[item]
    const dispatch = useDispatch()

    useEffect(() => {
        if (movies.length && isSuccess) {
            setMovies((prevMovies) => [...prevMovies, ...data.results])
        } else if (data?.results.length !== undefined) {
            setMovies(data?.results)
        }
    }, [data, searchParams])


    useEffect(() => {
        if (searchParams) {
            searchParams.forEach((value, key) => {
                if (key === 'rating') {
                    setInitial()
                    dispatch(setRating({ rating: value }))
                }
            })
        }

    }, [searchParams])

    useObserver(lastElementCurrent, isLoading, () => {
        setPage((prev) => prev + 1)
    })

    const setInitial = () => {
        setMovies([])
        setPage(() => 1)
    }

    if (isLoading) {
        return <MyLoader />
    }

    if (error) {
        return <div>
            Error
        </div>
    }

    return (
        <div className={'container'}>
            <ParentComponent setInitial={setInitial} />
            <h2 style={{ color: 'white' }}>{id && genres[id]}</h2>
            <div className={styles.movies}>
                <div className={styles.movie}>
                    {movies?.map((movie) => {
                        return (movie.poster_path && movie.backdrop_path) &&
                            <MovieItem key={movie.id} movie={movie} className={'film_page_items'} />
                    })}
                </div>
            </div>
            <div ref={lastElementCurrent} className={styles.FilmsLoader}>{isLoading && 'Loading...'}</div>
        </div>

    )
};

export default memo(Movies)