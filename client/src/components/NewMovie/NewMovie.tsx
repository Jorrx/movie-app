import React, {FC, memo, useEffect, useState} from 'react';
import {IMovies} from "../../types/types";
import Genres from "../Genres/Genres";
import NewMovieItems from "./NewMovieItems";
import {movieApi} from "../../services/MovieServices";



const NewMovie: FC = () => {
    const {data: popularFilms} = movieApi.useGetNewMoviesQuery()
        
    return (
        <div>
            <div>
                {popularFilms?.results.length &&
                <NewMovieItems
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
                <NewMovieItems popularFilms={popularFilms.results}  className={'other_sliders slider-container'}/>
            </div>
            }
        </div>

    );

};

export default memo(NewMovie)