import React, {FC, memo, useEffect, useState} from 'react';
import {IMovies} from "../../types/types";
import movieRequests from '../../requets/requst'
import styles from './NewMovies.module.scss'
import Genres from "../Genres/Genres";
import NewFilms from "./NewFilms";
import {movieApi} from "../../services/MovieServices";

export interface INewMovie {
    results: IMovies[]
}

const NewMovies: FC = () => {
    const {data: popularFilms} = movieApi.useGetNewFilmsQuery(10)
    return (
        <div>
            <div className={styles.main_slider}>
                {popularFilms?.results.length &&
                <NewFilms
                    popularFilms={popularFilms.results}
                    className={'mySwiper'}
                    slidesPerGroup={1}
                    slidesPerView={2}
                    loop={true}
                    isCenterItems={true}
                />}
            </div>
            {popularFilms?.results?.length && <Genres/>}
            {popularFilms?.results?.length &&
            <div className={'container_slider'}>
                <NewFilms popularFilms={popularFilms.results} className={'other_sliders slider-container'}/>
                <NewFilms popularFilms={popularFilms.results} className={'other_sliders slider-container'}/>
                <NewFilms popularFilms={popularFilms.results} className={'other_sliders slider-container'}/>
                <NewFilms popularFilms={popularFilms.results} className={'other_sliders slider-container'}/>
            </div>
            }
        </div>

    );

};

export default memo(NewMovies)