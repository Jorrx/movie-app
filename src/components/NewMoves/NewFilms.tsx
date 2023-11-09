import React, {FC} from 'react';
import SimpleSlider from "../slide/SimpleSlider";
import HomeMovieItem from "../HomeMovieItems/HomeMovieItem";
import {IMovies} from "../../types/types";
import {SwiperSlide} from "swiper/react";
import SliderLists from "../SliderLists";
import NewMoviesItem from "./NewMoviesItem";

interface IProps {
    popularFilms: IMovies[]
    className: string
    slidesPerGroup?: number
    slidesPerView?: number
    loop?: boolean;
    isCenterItems?: boolean
}

export default function NewFilms(
    {
        popularFilms,
        className,
        slidesPerGroup=1,
        slidesPerView=6,
        loop = false,
        isCenterItems = false
    }: IProps) {
    return (
        <>
            <h2 style={{color: 'white'}}>New Movies</h2>
            {popularFilms.length &&
            <SimpleSlider
                slidesPerView={slidesPerView}
                slidesPerGroup={slidesPerGroup}
                className={className}
                loop={loop}
                isCenterItems={isCenterItems}
            >
                {popularFilms.map((movie) =>
                    <SwiperSlide key={movie.id}>
                        {
                            className === 'mySwiper'
                                ?
                                <NewMoviesItem movie={movie}/>
                                :
                                <HomeMovieItem movie={movie}/>
                        }
                    </SwiperSlide>
                )}
            </SimpleSlider>
            }
        </>
    );
};
