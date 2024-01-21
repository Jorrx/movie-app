import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import {
    AUTH_ROUTE,
    FILMS_ROUTE,
    FILM_ITEM_ROUTE,
    GENRE_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE,
    PROFILE_ROUTE
} from "../utils/routes";
import Movies from "../pages/Movies/Movies";
import Auth from "../pages/Auth/Auth";
import Profile from '../pages/User/Profile'

export interface IRoute {
    path: string
    Element: React.ComponentType;
}


export const publicRoute: IRoute[] = [
    {
        path: HOME_ROUTE,
        Element: Home
    },
    {
        path: FILMS_ROUTE,
        Element: Movies
    },
    {
        path: FILMS_ROUTE,
        Element: Movies
    },
    {
        path: FILM_ITEM_ROUTE + '/:id',
        Element: Movie
    },
    {
        path: PROFILE_ROUTE,
        Element: Profile
    }
]


export const authRoutes: IRoute[] = [
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTER_ROUTE,
        Element: Auth
    }
]


export const navigationLinks = [
    {
        path: HOME_ROUTE,
        name:'Main'
    },
    {
        path: FILMS_ROUTE,
        name:'Films'

    }
]



