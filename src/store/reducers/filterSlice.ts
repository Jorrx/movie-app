import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    genre:[]
}



const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        getGenres(state ,action){
            state.genre = action.payload
        }
    }
})