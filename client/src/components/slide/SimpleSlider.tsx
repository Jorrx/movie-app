import React, {FC, useEffect, useRef, useState} from 'react';
import {IMovies} from '../../types/types';
import axios from 'axios';
import './SimpleSlider.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {Pagination, Navigation} from 'swiper/modules';

const breakpoints = {
    577: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 15,
    },
    769: {
        slidesPerGroup: 3,
        slidesPerView: 1,

        spaceBetween: 30,
    },
    1025: {
        slidesPerGroup: 3,
        slidesPerView: 1,

        spaceBetween: 30,
    },
    1200: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

export interface ISwiper {
    slidesPerGroup: number,
    slidesPerView: number,
    children?: React.ReactNode,
    isCenterItems?: boolean,
    loop?: boolean,
    className: string
    navigation?: false
}

const SimpleSlider: FC<ISwiper> = (
    {
        slidesPerView,
        slidesPerGroup,
        children,
        isCenterItems = false,
        loop = false,
        className,
        navigation = true,
    }) => {
    return (
        <>
            <Swiper
                slidesPerGroup={slidesPerGroup}
                slidesPerView={slidesPerView}
                spaceBetween={30}
                loop={loop}
                centeredSlides={isCenterItems}
                navigation={navigation}
                modules={[Pagination, Navigation]}
                speed={1000}
                className={`${className}`}
            >

                    {children}
            </Swiper>
        </>
    );
};

export default SimpleSlider;




