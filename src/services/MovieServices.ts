import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {requestHeader} from "../requets/requst";
import {IMovieInfo, IMovies} from "../types/types";
import { IGenre } from "../components/Genres/Genres";


export interface INewMovie {
    results: IMovies[]
}

export interface INewGenres {
    genres: IGenre[]
}

interface IQuery {
    id?: string
    page?: number
}

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (build) => {
        return ({
            getNewMovies: build.query<INewMovie, void>({
                query: () => ({
                    url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-08-01&sort_by=primary_release_date.desc&vote_average.gte=7.5&vote_count.gte=100&year=2023&limit=`,
                    headers: requestHeader.headers,
                })
            }),
            getMovie: build.query<IMovieInfo, string | undefined>({
                query: (id) => ({
                    url: `movie/${id}?append_to_response=videos`,
                    headers: requestHeader.headers,
                })
            }),
            getByGenre: build.query<INewMovie, IQuery>({
                query: ({id, page = 1}) => ({
                    url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=primary_release_date.desc&vote_count.gte=150&with_genres=${id}`,
                    headers: requestHeader.headers,
                })
            }),
            getGenres: build.query<INewGenres , void>({
                query: () => ({
                    url: `/genre/movie/list?language=en`, 
                    headers: requestHeader.headers,       
                })
            }),
            getFilmBySearch: build.query<INewMovie, string>({
                query: (name) => ({
                    url: `https://api.themoviedb.org/3/search/movie?query=${name}&sort_by=primary_release_date.desc&vote_count.gte=250&include_adult=false&language=en-US&page=1&total_results=10`,
                    headers: requestHeader.headers,
                })
            }),

        });
    }
})
