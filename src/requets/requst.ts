import axios from "axios";
import { IMovies, IpopMovies } from "../types/types";





class movieRequests {
    requestHeader = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDM3NGQ5Mzc4OGZmNTQ5NGZkNWU3ZTViNDNkNWYxNyIsInN1YiI6IjYzZGE2OTAyMjJkZjJlMDA4Y2NhZDRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVX1OTXOqmroHxqDAIw4_OzoV4OhCw8hdqlXSUeK6-c'
        }
    }

    async getGenres() {
        try {
            const req = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', this.requestHeader)
            const { genres } = req.data
            return genres
        } catch (err) {
            console.log(err)
        }
    }
    async getMovie() {
        try {
            const req = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', this.requestHeader)
            const { genres } = req.data
            return genres
        } catch (err) {
            console.log(err)
        }
    }

    async popularMovies(): Promise<IMovies[]> {
        try {
            const response = await axios.get<IpopMovies>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-08-01&sort_by=primary_release_date.desc&vote_average.gte=7.5&vote_count.gte=100&year=2023', this.requestHeader)
            return response.data.results
        } catch (error) {
            throw error;
        }
    }
}

export const requestHeader = {
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDM3NGQ5Mzc4OGZmNTQ5NGZkNWU3ZTViNDNkNWYxNyIsInN1YiI6IjYzZGE2OTAyMjJkZjJlMDA4Y2NhZDRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVX1OTXOqmroHxqDAIw4_OzoV4OhCw8hdqlXSUeK6-c'
        }
}

export default new movieRequests()