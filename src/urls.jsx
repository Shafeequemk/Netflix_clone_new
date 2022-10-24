import { API_KEY } from "./Constants/Constants"

export const Originals =`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action  =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const HorrorMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const ComedyMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const ActionMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanceMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Documentaries =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`