import React, {FC, memo, useEffect, useState} from 'react';
import styles from './MovieFilter.module.scss'
import {genres, IFilter,} from "../../utils/genres";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { FILMS_ROUTE, } from "../../utils/routes";
import { useAppDispatch,  } from '../../hooks/redux';
import {setFilter } from '../../store/reducers/IFilterSlice';

interface IProps {
    filterName: string
    isOpen: boolean
    items: IFilter
    onClick: () => void
    setInitial: () => void

}

const FilterItem: FC<IProps> = ({ filterName, items, isOpen, onClick, setInitial }) => {
    const [checkedFilter, setCheckedFilter] = useState<string | false>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const [isChanged   ,setIsChanged] = useState<any>({
        genre:null,
        rating:null,
    })

    const handleSubmit = (e: string) => {
            setInitial()
        if (filterName === 'Genres') {
            searchParams.set('genre', items[e])

            dispatch(setFilter({
                ['genre']:e
            }))
            navigate(FILMS_ROUTE  + `?${searchParams}`);
        }

        if (filterName === 'Rating') {
            searchParams.set('rating', e)
            dispatch(setFilter({

                rating:e
            }))
            navigate(FILMS_ROUTE + `?${searchParams}`);
        }

    }
    // useEffect(()=>{
    //     if(searchParams.size){
    //
    //         searchParams.forEach((el,key) => {
    //             if(key === 'genre'){
    //                 dispatch(setFilter({
    //                     genre:el
    //                 }))
    //             }else{
    //                 dispatch(setFilter({
    //                     [key]:el
    //                 }))
    //             }
    //             console.log(el  , key)
    //         })
    //     }
    // },[searchParams])

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

export default  memo(FilterItem);


