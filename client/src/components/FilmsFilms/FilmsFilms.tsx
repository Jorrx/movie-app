import React, {useCallback, useEffect, useRef, useState, memo} from 'react';
import MovieLists from "../MovieLists/MovieLists";
import FilmsFilter from "../FilmsFilter/FilmsFilter";
import styles from '../../components/FilmsFilms/Movies.module.scss'
import {IMovies} from "../../types/types";
import {useAppSelector} from "../../hooks/redux";
import { useLocation} from "react-router-dom";
import {movieApi} from "../../services/MovieServices";
import MyLoader from "../UI/MyLoader/MyLoader";
import Error from "../../pages/Error/Error";
import {useObserver} from "../../hooks/useObserver";


const FilmsFilms = () => {
    const [movies, setMovies] = useState<IMovies[]>([])
    const [page, setPage] = useState<number>(1)
    const lastElementCurrent = useRef<HTMLDivElement | null>(null);
    const filter = useAppSelector(state => state.filterReducer)
    const {data, error, isFetching, isLoading, isSuccess} = movieApi.useGetByGenreQuery({page, filter})
    const location = useLocation()
    const pathIsChanged = useRef<string>('')

    useEffect(() => {
        if (!isSuccess ) return
        if (pathIsChanged.current !== location.pathname + location.search) {
            setMovies(data.results)
        } else {
            setMovies((prevMovies) => [...prevMovies, ...data.results])
        }
        pathIsChanged.current = location.pathname + location.search
    }, [data])

    useObserver(lastElementCurrent, isLoading, () => {
        setPage((prev) => prev + 1)
    })

    if(isLoading){
        return <MyLoader />
    }
    if (error) {
        return <Error/>
    }

    return (
        <>
            <FilmsFilter setPage={setPage} filter={filter}/>
            <div className={styles.movies}>
                <div className={styles.movie}>
                    { movies.length
                        ?
                        <MovieLists movies={movies} className={'film_page_items'}/>
                        :
                        <h2 style={{color: 'white'}}>Movies were not found for your search</h2>
                    }
                </div>
            </div>
            <div ref={lastElementCurrent} className={styles.FilmsLoader}> </div>
            {(isLoading || isFetching) && <div className={styles.FilmsLoader}>Loading...</div>}
        </>
    );
};

export default FilmsFilms