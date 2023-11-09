import {movieApi} from '../services/MovieServices'
import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducers = combineReducers({
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





