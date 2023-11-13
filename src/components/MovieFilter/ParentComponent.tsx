import React, {useState} from "react";
import MovieFilter from "./MovieFilter";
import {genres} from "../../utils/genres";
import styles from './MovieFilter.module.scss'

const ParentComponent = () => {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    const handleFilterToggle = (filterName: string) => {
        setOpenFilter((prev) => (prev === filterName ? null : filterName));
    };

    return (
        <div className={styles.movieFilter}>
            <div>
                <MovieFilter
                    filterName="Genres"
                    isOpen={openFilter === 'Genres'}
                    onClick={() => handleFilterToggle('Genres')}
                    items={Object.keys(genres)}
                />
                <MovieFilter
                    filterName="Filter 2"
                    isOpen={openFilter === 'Filter 2'}
                    onClick={() => handleFilterToggle('Filter 2')}
                />
                <MovieFilter
                    filterName="Filter 3"
                    isOpen={openFilter === 'Filter 3'}
                    onClick={() => handleFilterToggle('Filter 3')}
                />
            </div>
            <div>
                <MovieFilter
                    filterName="Filter 1"
                    isOpen={openFilter === 'Filter 1'}
                    onClick={() => handleFilterToggle('Filter 1')}
                />
            </div>
        </div>
    );
};

export default ParentComponent;