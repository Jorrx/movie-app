import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import {AuthResponse, IMovieInfo, IMovies} from "../../types/types";
import { IRegister } from "../../components/LoginRegister/Register";
import { ILogin } from "../../components/LoginRegister/Login";
import { ISaveMovies } from "../types";







export const userRegistration = createAsyncThunk(
    'user/registration',
    async ({ email, password, fullName }: IRegister, thunkAPI) => {
        try {
            const response = await AuthService.registration(email, password, fullName);
            localStorage.setItem('token', response.data.accessToken);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);


export const userLogin = createAsyncThunk(
    'user/registration',
    async ({ email, password }: ILogin, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const userLogout = createAsyncThunk(
    'user/logout',
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const userCheckAuth = createAsyncThunk(
    'user/checkAuth',
    async (_, thunkAPI) => {
        try {
            const response = await AuthService.checkAuth();
            localStorage.setItem('token', response.data.accessToken);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);




export const userMovieSave = createAsyncThunk(
    'user/movieSave',
    async ({ movie }:IMovies | any, thunkAPI) => {
        try {
            const response = await AuthService.saveMovie(movie);
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);



export const userMovieCancel = createAsyncThunk(
    'user/movieCancel',
    async ({ movie }:IMovies | any, thunkAPI) => {
        try {
            const response = await AuthService.cancelSaveMovie(movie);
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);