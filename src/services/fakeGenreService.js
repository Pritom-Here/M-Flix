export const genres = [
  { _id: "g1", name: "Action" },
  { _id: "g2", name: "Adventure" },
  { _id: "g3", name: "Animation" },
  { _id: "g4", name: "Biography" },
  { _id: "g5", name: "Comedy" },
  { _id: "g6", name: "Crime" },
  { _id: "g7", name: "Documentory" },
  { _id: "g8", name: "Drama" },
  { _id: "g9", name: "Family" },
  { _id: "g10", name: "Fantasy" },
  { _id: "g11", name: "History" },
  { _id: "g12", name: "Horror" },
  { _id: "g13", name: "Music" },
  { _id: "g14", name: "Mystery" },
  { _id: "g15", name: "Romance" },
  { _id: "g16", name: "Sci-fi" },
  { _id: "g17", name: "Sport" },
  { _id: "g18", name: "Thriller" },
  { _id: "g19", name: "War" },
  { _id: "g20", name: "Western" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
