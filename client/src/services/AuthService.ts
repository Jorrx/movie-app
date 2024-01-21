import { AxiosResponse } from "axios";
import { AuthResponse, IMovieInfo } from "../types/types";
import $api from './index'

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', { email, password })
    }

    static async registration(email: string, password: string, fullName: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', { email, password, fullName })
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

    static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>('/refresh')
    }

    static async saveMovie(movie:IMovieInfo): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/savemovies' , {movie})
    }

    static async cancelSaveMovie(movie:IMovieInfo):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/cancelSaveMovie' , {movie})
    }
}