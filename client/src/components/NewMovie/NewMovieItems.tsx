import React, {FC} from 'react';
import SimpleSlider from "../slide/SimpleSlider";
import MovieItem from "../HomeMovieItems/MovieItem";
import {IMovies} from "../../types/types";
import {SwiperSlide} from "swiper/react";
import SliderLists from "../SliderLists";

interface IProps {
    popularFilms: IMovies[]
    className: string
    slidesPerGroup?: number
    slidesPerView?: number
    loop?: boolean;
    isCenterItems?: boolean
}

export default function NewMovieItems(
    {
        popularFilms,
        className,
        slidesPerGroup = 1,
        slidesPerView = 6,
        loop = false,
        isCenterItems = false
    }: IProps) {
    return (
        <>
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
                                <MovieItem movie={movie} backdrop_path={movie.backdrop_path} className={'mySwiper'}/>
                                :
                                <MovieItem movie={movie} className='film_page_items'/>
                        }
                    </SwiperSlide>
                )}
            </SimpleSlider>
            }
        </>
    );
};
