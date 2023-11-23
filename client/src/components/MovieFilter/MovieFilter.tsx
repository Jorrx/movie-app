import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './MovieFilter.module.scss'
import { IFilter, genres, ratings } from "../../utils/genres";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FILMS_ROUTE, FILM_ITEM_ROUTE, GENRE_ROUTE } from "../../utils/routes";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getGenres, setRating } from '../../store/reducers/filterSlice';

interface IProps {
    filterName: string
    isOpen: boolean
    items: IFilter
    onClick: () => void
    setInitial: () => void

}

const MovieFilter: FC<IProps> = ({ filterName, items, isOpen, onClick, setInitial }) => {
    const [checkedFilter, setCheckedFilter] = useState<string | false>(false)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams] = useSearchParams();

    const handleSubmit = (e: string) => {
        if (filterName === 'Genres') {
            setInitial()
            dispatch(getGenres(e))
            navigate(FILMS_ROUTE + GENRE_ROUTE + `/${e}`);
            return
        }
        if (filterName === 'Rating') {
            searchParams.set('rating', e)
            navigate(FILMS_ROUTE + GENRE_ROUTE + `/${id}?${searchParams}`);
        }

    }
    
    return (
        <>

            <div className={styles.filter}>
                <div onClick={onClick} className={styles.filter_Name}>
                    {!checkedFilter ? filterName : checkedFilter}
                </div>
                <div style={isOpen ? { display: 'block' } : { display: 'none' }} className={styles.filter_Items}>
                    {Object.keys(items)?.map((el) =>
                        <div key={el} onClick={() => {
                            handleSubmit(el)
                        }} >{items[el]}</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MovieFilter;


