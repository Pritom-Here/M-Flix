import http from "./httpService";

function getApiEndPoint(language, genre, year, page) {
  if (language !== "" && genre !== "")
    return `https://api.themoviedb.org/3/discover/tv?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&first_air_date_year=${year}&page=${page}&timezone=America%2FNew_York&with_genres=${genre}&include_null_first_air_dates=false&with_original_language=${language}&with_watch_monetization_types=flatrate`;

  if (language === "" && genre === "")
    return `https://api.themoviedb.org/3/discover/tv?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&first_air_date_year=${year}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;

  if (genre !== "")
    return `https://api.themoviedb.org/3/discover/tv?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&first_air_date_year=${year}&page=${page}&timezone=America%2FNew_York&with_genres=${genre}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;

  if (language !== "")
    return `https://api.themoviedb.org/3/discover/tv?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US&sort_by=popularity.desc&first_air_date_year=${year}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=${language}&with_watch_monetization_types=flatrate`;
}

export async function getTvShows(language, genre, year, page) {
  return await http.get(getApiEndPoint(language, genre, year, page));
}
