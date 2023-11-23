import { useParams } from "react-router-dom";
import React, { FC, useState } from 'react'
import styles from './Movie.module.scss'
import { movieApi } from "../../services/MovieServices";
import MyLoader from "../../components/UI/MyLoader/MyLoader";
import Error from "../Error/Error";
import MyButton from "../../components/UI/MyButton/MyButton";
import YouTube from 'react-youtube';
import MyModal from "../../components/UI/MyModal/MyModal";


const Movie: FC = () => {
    const { id } = useParams()
    const { data: movie, isLoading, error } = movieApi.useGetMovieQuery(id)
    const [modal, setModal] = useState<boolean>(false)

    if (isLoading) {
        return <MyLoader />
    }

    if (error) {
        return <Error />
    }

    const watchFilm = () => {
        setModal(true)
    }

    return <div className={styles.movie_Item} style={{ color: 'white', background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }}>
        {movie?.id
            &&
            <div className={styles.movie_item_inner}
            >
                
                <div className={styles.movieItem_Info}>
                    <h2>
                        {/* <img src={'https://image.tmdb.org/t/p/w300/' +movie.production_companies[0].logo_path} alt="" /> */}
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
                    <div>
                        <MyButton onClick={watchFilm}>Watch Film</MyButton>
                    </div>
                </div>
            </div>}
        {modal && <MyModal visible={modal} setVisible={setModal}>
            <YouTube videoId={movie?.videos.results[movie?.videos.results.length - 1]?.key} />
        </MyModal>}

    </div>
}


export default Movie