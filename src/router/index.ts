import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import { GENRE_ROUTE, HOME_ROUTE, MOVIE_ITEM_ROUTE } from "../utils/routes";
import MovieByGenre from "../pages/ByGenre/MovieByGenre";










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
        path:MOVIE_ITEM_ROUTE+'/:id',
        Element:Movie
    }
]


