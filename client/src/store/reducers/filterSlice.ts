import { createSlice } from "@reduxjs/toolkit";

export interface FilterSlice {
    filter: {
        genre: string | null
        minData: string
        maxData: string
        rating:string 
        sortBy: string 
    }
}

const initialState: FilterSlice = {
    filter: {
        genre: null,
        minData: '&release_date.gte=1900',
        maxData: '&release_date.lte=2023',
        rating: `&vote_average.gte=5.0`,
        sortBy: '$sort_by=primary_release_date.desc'
    }
}



const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        getGenres(state, action) {
            state.filter.genre = action.payload
        },
        setDataSort(state, action) {
            state.filter.minData = `&release_date.gte=${action.payload.minData}`
            state.filter.maxData = `&release_date.lte=${action.payload.maxData}`
        },
        setRating(state , action){
            state.filter.rating = `&vote_average.gte=${action.payload.rating}.0`
        },
    }
})







export const { getGenres, setDataSort , setRating} = filterSlice.actions

export const filterReducer = filterSlice.reducer;
