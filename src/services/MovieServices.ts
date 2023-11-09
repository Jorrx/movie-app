import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {requestHeader} from "../requets/requst";
import {IMovies} from "../types/types";
import {INewMovie} from "../components/NewMoves/NewMovies";


export const movieApi = createApi({
    reducerPath:'movieApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(build)=>({
        getNewFilms: build.query<INewMovie, number>({
            query: () =>({
                    url:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-08-01&sort_by=primary_release_date.desc&vote_average.gte=7.5&vote_count.gte=100&year=2023`,
                    headers:requestHeader.headers,
           })
        }),
        getByGenre: build.query<INewMovie, string | undefined>({
            query: (id) =>({
                url:`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&sort_by=vote_average.desc&with_genres=${id}`,
                headers:requestHeader.headers,
            })
        }),

    })
})
