import React, {memo, useState} from 'react';
import styles from './SearchFilms.module.scss'
import {useDebounce} from "../../hooks/useDebounce";
import {movieApi} from "../../services/MovieServices";
import {Link} from "react-router-dom";
import {FILM_ITEM_ROUTE} from "../../utils/routes";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearch, setVisible } from '../../store/reducers/searchSlice';

const SearchFilms = memo(() => {
    const {search} = useAppSelector(state => state.searchReducer)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>('')
    const {data, isLoading, error} = movieApi.useGetFilmBySearchQuery(search)
    const debouncedSearch = useDebounce(searching, 500)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    function searching(e: string) {        
        dispatch(setSearch(e))
    }

    const onclick = () => {
        dispatch(setVisible(false))
    }

    return (
        <>
            <div className={styles.search}>
                <input type="text" placeholder='Search...' onChange={onChange} value={value}/>
            </div>
            {(value && data?.results.length) && <div className={styles.searchResults}>
                <div className={styles.searchResultsItem}>
                    {data.results.slice(0, 6).map(el => {
                            return el.poster_path && <Link onClick={onclick} to={`${FILM_ITEM_ROUTE}/${el.id}`} key={el.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt=""/>
                                <span>{el.title}</span>
                            </Link>
                        }
                    )}
                </div>
            </div>}
        </>
    );

});

export default SearchFilms