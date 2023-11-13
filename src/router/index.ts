import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import {AUTH_ROUTE, FILM_ITEM_ROUTE, GENRE_ROUTE, HOME_ROUTE,} from "../utils/routes";
import MovieByGenre from "../pages/Movies/Movies";
import Auth from "../pages/Auth/Auth";










export interface IRoute{
    path:string
    Element:React.ComponentType;
}



export const publicRoute:IRoute[] = [
    {
        path:HOME_ROUTE,
        Element:Home
    },
    {
        path:GENRE_ROUTE+'/:id',
        Element:MovieByGenre
    },
    {
        path:FILM_ITEM_ROUTE+'/:id',
        Element:Movie
    },
    {
        path:AUTH_ROUTE,
        Element:Auth
    }
]


