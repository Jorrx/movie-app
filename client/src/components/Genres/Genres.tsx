import React, { FC, useEffect, useState } from 'react'
import './Genres.css'
import SimpleSlider from "../slide/SimpleSlider";
import { SwiperSlide } from "swiper/react";
import {FILMS_ROUTE, GENRE_ROUTE } from "../../utils/routes";
import { Link } from "react-router-dom";
import { movieApi } from '../../services/MovieServices';

export interface IGenre {
    id: number;
    name: string;
}

const Genres: FC = () => {
    const { data } = movieApi.useGetGenresQuery()


    return (

        <div className={'movie_genres'}>
            <div className={'container'}>
                <SimpleSlider
                    slidesPerGroup={1}
                    slidesPerView={9}
                    navigation={false}
                    className={'genre_Swiper'}>

                    {data?.genres?.map((genre) =>
                        <SwiperSlide key={genre.id}>
                            <div>
                                <Link to={`${FILMS_ROUTE + GENRE_ROUTE}/${genre.id}`} className={'genres_item'}>
                                    {genre.name}
                                </Link>
                            </div>
                        </SwiperSlide>
                    )}
                </SimpleSlider>
            </div>
        </div>
    )
}

export default Genres
