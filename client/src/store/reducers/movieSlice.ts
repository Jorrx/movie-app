import { createSlice } from "@reduxjs/toolkit"
import { IMovies } from "../../types/types"

interface ISlice {
    movies: IMovies[] | [],
    page:number
}

const initialState: ISlice = {
    movies: [],
    page:1
}

const movieSlice = createSlice(
    {
        name: 'movies',
        initialState,
        reducers: {
            setMovies(state, action) {
                state.movies = action.payload
            },
            addMovies(state, action) {
                state.movies = [...state.movies, ...action.payload];

            },
            resetMovies(state) {
                state.page = initialState.page
                state.movies = initialState.movies
            },
            setPage(state, action){
                state.page = action.payload
            }
        }
    }
)



export const { setMovies, resetMovies,addMovies,setPage } = movieSlice.actions

export const movieReducer = movieSlice.reducer