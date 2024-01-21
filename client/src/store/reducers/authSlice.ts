import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import {
    userCheckAuth,
    userLogin,
    userLogout,
    userMovieCancel,
    userMovieSave,
    userRegistration
} from "./actionCreator"
import {AuthResponse, IUser} from "../../types/types";
import {ErrorActon, ErrorResponseData, ISaveMovies} from "../types";


export interface IUserSlice {
    auth: boolean;
    user: IUser | null | undefined
    isLoading: boolean
    isError: ErrorActon
}

const initialError: ErrorActon = {
    message: '',
    errors: []
}

const initialState: IUserSlice = {
    auth: false,
    user: null,
    isLoading: false,
    isError: initialError
}


export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        refreshErrorData(state: IUserSlice) {
            state.isError = initialError
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                userLogout.fulfilled.type,
                (state, action: PayloadAction<IUser>) => {
                    state.auth = false
                    state.isLoading = false
                    state.user = action.payload
                })
        builder.addMatcher<PayloadAction<AuthResponse>>(
            (action) =>
                [userMovieSave.fulfilled.type, userMovieCancel.fulfilled.type].includes(action.type),
            (state, action: PayloadAction<ISaveMovies>) => {
                state.isLoading = false
                state.user = action.payload.user
                state.isError = initialError
            }
        )
        builder.addMatcher<PayloadAction<AuthResponse>>(
            (action) =>
                [userRegistration.fulfilled.type,
                    userLogin.fulfilled.type, userCheckAuth.fulfilled.type].includes(action.type),
            (state, action) => {
                state.auth = action.type !== userLogout.fulfilled.type;
                state.isLoading = false
                state.user = action.payload.user
                state.isError = initialError
            }
        );
        builder.addMatcher(
            (action) =>
                [userRegistration.pending.type, userLogin.pending.type, userCheckAuth.pending.type].includes(action.type),
            (state) => {
                state.isLoading = true
            }
        );

        builder.addMatcher<PayloadAction<ErrorResponseData>>(
            (action) =>
                [userRegistration.rejected.type, userLogin.rejected.type, userCheckAuth.rejected.type].includes(action.type),
            (state, action) => {
                state.auth = false
                state.isLoading = false
                state.isError = action.payload.response.data
            }
        );
    }
})


export const authReducer = authSlice.reducer;

export const {refreshErrorData} = authSlice.actions



