import { IUser } from "../types/types";

export enum UserActionTypes {
  USER_REGISTRATION_FULFILLED = 'userRegistration/fulfilled',
  USER_LOGIN_FULFILLED = 'userLogin/fulfilled',
  USER_CHECK_AUTH_FULFILLED = 'userCheckAuth/fulfilled',
}


export interface ErrorActon {
  message: string,
  errors: any[],

}
export interface ErrorResponseData {
  response: {
    data: ErrorActon
  }
}

export interface ISaveMovies {
  user:IUser
}