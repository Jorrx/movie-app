import {createSlice} from "@reduxjs/toolkit";

export interface IFilterSlice {
    filter: {
        genre: string | null
        minData: string
        maxData: string
        rating: string
        sortBy: string
    }
}

const initialState: IFilterSlice = {
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
        setDataSort(state, action) {
            state.filter.minData = `&release_date.gte=${action.payload.minData}`
            state.filter.maxData = `&release_date.lte=${action.payload.maxData}`
        },
        setFilter(state, action) {;
            if (action.payload['rating']) {
                state.filter.rating = `&vote_average.gte=${action.payload.rating}.0`
            }else{
                console.log(action.payload)
                state.filter.genre = action.payload.genre
            }
        },
    }
})


export const {setDataSort, setFilter} = filterSlice.actions

export const filterReducer = filterSlice.reducer;
