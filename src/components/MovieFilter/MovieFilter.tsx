import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './MovieFilter.module.scss'
import {genres} from "../../utils/genres";
import { useNavigate , useParams} from "react-router-dom";
import {GENRE_ROUTE} from "../../utils/routes";

interface IProps {
    filterName: string
    isOpen: boolean
    items?: string[]
    onClick: () => void
}

const MovieFilter: FC<IProps> = ({filterName, items, isOpen, onClick}) => {
    const [checkedFilter, setCheckedFilter] = useState<string | false>(false)
    const navigate = useNavigate()
    const {id} = useParams()


    const handleSubmit = (e:string) => {
        setCheckedFilter(genres[e])
        navigate(GENRE_ROUTE+`/${e}`)
        console.log(genres[e] , 'genres[e]')
    }


    return (
        <div className={styles.filter}>
            <div onClick={onClick} className={styles.filter_Name}>
                {!checkedFilter ? filterName : checkedFilter}
            </div>
            <div style={isOpen ? {display: 'block'} : {display: 'none'}} className={styles.filter_Items}>
                {items?.length && items?.map((el) =>
                        <div key={el} onClick={()=> {
                            handleSubmit(el)
                        }} >{genres[el]}</div>
                    )
                }

            </div>


        </div>
    );
};

export default MovieFilter;


