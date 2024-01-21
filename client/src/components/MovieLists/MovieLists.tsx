import React, { memo} from 'react';
import {IMovies} from "../../types/types";
import MovieItem from "../HomeMovieItems/MovieItem";


interface IProps {
    movies: IMovies[]
    className?: string
}

function MovieLists({className, movies}: IProps) {
    return <>
        {movies?.map(movie =>
            (movie.poster_path && movie.backdrop_path) && <MovieItem key={movie.id} movie={movie} className={className}/>
        )}
    </>

}

export default memo(MovieLists);