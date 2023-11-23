import React, {FC} from 'react';
import {IMovies} from "../../types/types";
import MovieItem from "../HomeMovieItems/MovieItem";


interface IProps {
    movies:IMovies[]
}
function FilmsLists({movies}:IProps) {
    return (
        movies && movies.map(movie => {
            return (movie.poster_path && movie.backdrop_path) &&
                <MovieItem key={movie.id} movie={movie}/>
            }
        )
    );
};

export default FilmsLists;