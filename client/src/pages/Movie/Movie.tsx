import {useParams} from "react-router-dom";
import React, {FC, memo, useCallback, useEffect, useMemo, useState} from 'react'
import styles from './Movie.module.scss'
import {movieApi} from "../../services/MovieServices";
import MyLoader from "../../components/UI/MyLoader/MyLoader";
import Error from "../Error/Error";
import MyButton from "../../components/UI/MyButton/MyButton";
import YouTube from 'react-youtube';
import MyModal from "../../components/UI/MyModal/MyModal";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userMovieCancel, userMovieSave} from "../../store/reducers/actionCreator";
import SaveIcon from "../../components/UI/SaveUI/Save";
import {IMovies} from "../../types/types";

const Movie: FC = () => {
    const {id} = useParams()
    const {data: movie, isLoading, error} = movieApi.useGetMovieQuery(id)
    const [modal, setModal] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.authReducer)
    const [movieIsSaved, setMovieIsSaved] = useState<Boolean>(false)


    useEffect(() => {
        if (isSaved()?.length) {
            setMovieIsSaved(true)
        } else {
            setMovieIsSaved(false)
        }
    }, [user.user?.savedMovies])

    const saveCallback = (event: string) => {
        if (!user.user?.email || !movie) return
        const body: IMovies = {
            id: movie.id,
            backdrop_path: movie.backdrop_path,
            email: user.user.email,
            title: movie.title,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            poster_path: movie?.poster_path
        }
        event === 'save'
            ?
            dispatch(userMovieSave({movie: body}))
            :
            dispatch(userMovieCancel({movie: body}))
    }

    if (isLoading) {
        return <MyLoader/>
    }

    if (error || !movie) {
        return <Error/>
    }


    const watchFilm = () => {
        setModal(true)
    }

    function isSaved() {
        if (!user.user?.savedMovies?.length) return
        return user.user?.savedMovies.filter(el => {
            return el.id == id
        })
    }


    return <div className={styles.movie_Item} style={{
        color: 'white',
        background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
    }}>
        {movie?.id
        &&
        <div className={styles.movie_item_inner}
        >

            <div className={styles.movieItem_Info}>
                <h2>
                    {movie.title}
                </h2>
                <div>
                    <div className={styles.vote_average}>
                        {movie.vote_average.toFixed(1)}
                    </div>
                    <div>
                        {movie.release_date}
                    </div>
                </div>
                <div>
                    {movie.overview}
                </div>
                <div className={styles.movieUsing}>
                    <MyButton onClick={watchFilm}>Watch Film</MyButton>
                    {user.isLoading && '' || movieIsSaved ?
                        <SaveIcon color={'black'} onClick={() => saveCallback('cancel')}/>
                        :
                        <SaveIcon color={'white'} onClick={() => saveCallback('save')}/>
                    }
                </div>
                <div>
                    genres: {movie?.genres?.map(el =>
                        <span style={{
                            margin:"0 10px",
                            color:"lightBlue",
                            cursor:"pointer"
                        }} key={el.id}>{el.name}</span>
                    )}
                </div>
            </div>
        </div>}
        {modal && <MyModal visible={modal} setVisible={setModal}>
            <YouTube videoId={movie?.videos.results[movie?.videos.results.length - 1]?.key}/>
        </MyModal>}

    </div>
}


export default memo(Movie)