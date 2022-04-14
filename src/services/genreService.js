//import config from '../config.json';
import http from "./httpService";

export async function getGenres(type) {
  const { data } = await http.get(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=7c85884010a2a5459d100a22c8e6c6e9&language=en-US`
  );

  const genres = data.genres.map((genre) => {
    genre.name = genre.name === "Science Fiction" ? "Sci-fi" : genre.name;
    return genre;
  });

  return genres;
}
