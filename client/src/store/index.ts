import {movieApi} from '../services/MovieServices'
import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit";
import {searchReducer} from './reducers/searchSlice'
import {filterReducer} from './reducers/IFilterSlice'
import {movieReducer} from './reducers/movieSlice'
import {authReducer} from './reducers/authSlice'

const rootReducers = combineReducers({
    movieReducer,
    filterReducer,
    authReducer,
    searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
