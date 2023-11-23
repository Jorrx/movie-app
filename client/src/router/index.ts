import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import { AUTH_ROUTE, FILMS_ROUTE, FILM_ITEM_ROUTE, GENRE_ROUTE, HOME_ROUTE, } from "../utils/routes";
import Movies from "../pages/Movies/Movies";
import Auth from "../pages/Auth/Auth";


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
        path: FILMS_ROUTE + GENRE_ROUTE + '/:id',
        Element: Movies
    },
    {
        path: FILMS_ROUTE ,
        Element: Movies
    },
    {
        path: FILM_ITEM_ROUTE + '/:id',
        Element: Movie
    },
    {
        path: AUTH_ROUTE,
        Element: Auth
    }
]


