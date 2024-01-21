import React, {Dispatch, memo, SetStateAction, useCallback, useState} from "react";
import FilterItem from "./FilterItem";
import {genres, ratings} from "../../utils/genres";
import styles from './MovieFilter.module.scss'
import {IFilterSlice, setFilter} from "../../store/reducers/IFilterSlice";
import {useLocation , useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";

interface IProps {
    setPage: Dispatch<SetStateAction<number>>
    filter: IFilterSlice
}

const ParentComponent = memo(({filter, setPage}: IProps) => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const location = useLocation()
    const dispatch = useDispatch()
    const handleFilterToggle = (filterName: string) => {
        setOpenFilter((prev) => (prev === filterName ? null : filterName));
    };

    const setInitial = useCallback(() => {
        console.log('initial')
        setPage(1)
    }, [location.pathname])

    const defaultSettings = useCallback(() => {
         dispatch(setFilter({
            rating:'5'
        }))
        dispatch(setFilter({
            genre:null
        }))
        setPage(1)
    }, [])
    return (
        <div className={styles.movieFilter}>
            <div className={styles.movieFilterLeftSide}>
                <h2 style={{color: 'white'}}>{filter.filter.genre && genres[filter.filter.genre]}</h2>
                <p onClick={defaultSettings}>Default settings</p>
            </div>
            <div>
                <FilterItem
                    setInitial={setInitial}
                    filterName="Genres"
                    isOpen={openFilter === 'Genres'}
                    onClick={() => handleFilterToggle('Genres')}
                    items={genres}
                />

                <FilterItem
                    setInitial={setInitial}
                    filterName="Rating"
                    isOpen={openFilter === 'Rating'}
                    onClick={() => handleFilterToggle('Rating')}
                    items={ratings}
                />
            </div>
        </div>
    );
})

export default ParentComponent