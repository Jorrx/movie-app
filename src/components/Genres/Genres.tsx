import {FC, useEffect, useState} from 'react'
import './Genres.css'
import movieRequests from '../../requets/requst';
import SimpleSlider from "../slide/SimpleSlider";
import {SwiperSlide} from "swiper/react";
import {GENRE_ROUTE} from "../../utils/routes";

interface IGenre {
    id: number;
    name: string;
}

const Genres: FC = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    const getGenres = async () => {
        try {
            const request = await movieRequests.getGenres()
            setGenres(request)
            console.log(request)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <div className={'movie_genres'}>
            <div className={'container'}>
                <SimpleSlider
                    slidesPerGroup={1}
                    slidesPerView={9}
                    navigation={false}
                    className={'genre_Swiper'}>
                    {genres.map((genre,idx) =>
                        <SwiperSlide key={genre.id}>
                            <div>
                                <a className={'genres_item'} href={`${GENRE_ROUTE}/${genre.id}`}>{genre.name}</a>
                            </div>
                        </SwiperSlide>
                    )}
                </SimpleSlider>
            </div>
        </div>
    )
}

export default Genres
