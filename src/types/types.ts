export interface IMovies {
    id: number,
    title:string,
    backdrop_path: string,
    original_title: string,
    release_date: string,
    vote_average: number,
    poster_path: string
}

export interface IMovieInfo extends IMovies{
    overview:string,
    production_companies:any[]
    production_countries:any[]
    videos:any
}

export interface IMovieCorrect extends IMovies {
    overview: string
    production_companies: [
        {
            name: string,
            origin_country: string
        }
    ]
}



type videosType = {
    key: string
}

export interface IgetVideos<IMovies> {
    results: videosType[]
}


export interface IpopMovies {
    results: IMovies[],
}