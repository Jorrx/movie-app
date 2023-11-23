import React, { useState } from "react";
import MovieFilter from "./MovieFilter";
import { genres, ratings } from "../../utils/genres";
import styles from './MovieFilter.module.scss'
import { IMovies } from "../../types/types";

interface IProps {
    setInitial: ()=>void
}

const ParentComponent = ({ setInitial }: IProps) => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    const handleFilterToggle = (filterName: string) => {
        setOpenFilter((prev) => (prev === filterName ? null : filterName));
    };


    return (
        <div className={styles.movieFilter}>
            <div>
                <MovieFilter
                    setInitial={setInitial}
                    filterName="Genres"
                    isOpen={openFilter === 'Genres'}
                    onClick={() => handleFilterToggle('Genres')}
                    items={genres}
                />

                <MovieFilter
                    setInitial={setInitial}
                    filterName="Rating"
                    isOpen={openFilter === 'Rating'}
                    onClick={() => handleFilterToggle('Rating')}
                    items={ratings}
                />

                {/* <MovieFilter
                    filterName="Filter 3"
                    isOpen={openFilter === 'Filter 3'}
                    onClick={() => handleFilterToggle('Filter 3')}
                /> */}
            </div>
            <div>
                {/* <MovieFilter
                    filterName="Filter 1"
                    isOpen={openFilter === 'Filter 1'}
                    onClick={() => handleFilterToggle('Filter 1')}

                /> */}
            </div>
        </div>
    );
};

export default ParentComponent;