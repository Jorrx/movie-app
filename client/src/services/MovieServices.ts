import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { requestHeader } from "../requets/requst";
import { IMovieInfo, IMovies } from "../types/types";
import { IGenre } from "../components/Genres/Genres";
import { IFilterSlice } from "../store/reducers/IFilterSlice";


export interface INewMovie {
    results: IMovies[]
}

export interface INewGenres {
    genres: IGenre[]
}

interface IQuery {
    page?: number
    filter: IFilterSlice
}





export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_API}` }),
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
                query: ({ page = 1 , filter }) => ({
                    url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=primary_release_date.desc&vote_count.gte=150&with_genres=${filter.filter.genre}${filter.filter.rating}&vote_average.lte=10.0`,
                    headers: requestHeader.headers,
                })
            }),
            getGenres: build.query<INewGenres, void>({
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
