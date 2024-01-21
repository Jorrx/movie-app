
export interface IMovies {
    id: number | string,
    title: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number,
    poster_path: string
    email?:string
    genres?:[{
        name:string,
        id:string
    }]
}

export interface IMovieInfo extends IMovies {
    overview: string,
    production_companies: any[]
    production_countries: any[]
    videos: any
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

export interface IUser {
    email: string,
    fullName: string
    savedMovies: IMovies[] | undefined
}


export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}


