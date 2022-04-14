//import config from '../config.json';
import http from "./httpService";

//const apiEndPoint = `${config.tmdbApiEndPoint}/movie/popular?api_key=${config.apiKey}&page=1`;

//https://api.themoviedb.org/3/discover/movie?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&year=2019&with_original_language=en&with_watch_monetization_types=flatrate

function getApiEndPoint(language, genre, year, page) {
  if (language !== "" && genre !== "")
    return `https://api.themoviedb.org/3/discover/movie?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${year}&year=${year}&with_genres=${genre}&with_original_language=${language}&with_watch_monetization_types=flatrate`;

  if (language === "" && genre === "")
    return `https://api.themoviedb.org/3/discover/movie?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${year}&year=${year}&with_watch_monetization_types=flatrate`;

  if (genre !== "")
    return `https://api.themoviedb.org/3/discover/movie?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${year}&year=${year}&with_genres=${genre}&with_watch_monetization_types=flatrate`;

  if (language !== "")
    return `https://api.themoviedb.org/3/discover/movie?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=${year}&year=${year}&with_original_language=${language}&with_watch_monetization_types=flatrate`;
}

export async function getMovies(language, genre, year, page) {
  return await http.get(getApiEndPoint(language, genre, year, page));
}
