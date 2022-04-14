import { getGenres } from "./fakeGenreService";

const movies = [
  {
    _id: "m1",
    title: "Malignant",
    image:
      "https://i1.wp.com/moviewatchonline.com.pk/wp-content/uploads/2021/09/MV5BYTc0NWIwOTYtNzEwYi00YmUyLTlmYWYtYjJiZjRjN2RjMjAxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_-2.jpg?fit=1000%2C1482&ssl=1",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m2",
    title: "Dune",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m3",
    title: "Shang-Chi and the Legend of the Ten Rings",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m4",
    title: "Kate",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2IyYzI4YmQtNzBmMi00Mjg3LWI4NTMtNmZjNjk3YjIwZmJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m5",
    title: "Cry Macho",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGQ5OTBkNzAtYWQxYy00YjIxLWJkNTAtNTM2NDMxYzdkZDVmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m6",
    title: "Candyman",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzc4YzBiZTItMDVhYi00MzhkLTllNmItZTgyYTFkY2E2MGU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m7",
    title: "Nightmare Alley",
    image:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nightmare-alley-et00129623-28-08-2020-01-27-27.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m8",
    title: "Free Guy",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m9",
    title: "The Many Saints of Newark",
    image:
      "https://carrollnewsonline.com/wp-content/uploads/2021/06/289552R1.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m10",
    title: "Cruella",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m11",
    title: "The Suicide Squad",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m12",
    title: "Venom: Let There Be Carnage",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m13",
    title: "Don't Look Up",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m14",
    title: "The Guilty",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m15",
    title: "Nightbooks",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m16",
    title: "No Time to Die",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m17",
    title: "The Last Duel",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m18",
    title: "The Card Counter",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m19",
    title: "Last Night in Soho",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m20",
    title: "The Power of the Dog",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m21",
    title: "My Son",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m22",
    title: "Black Widow",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m23",
    title: "Don't Breathe 2",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m24",
    title: "Reminiscence",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m25",
    title: "The Green Knight",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m26",
    title: "Copshop",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m27",
    title: "Shershaah",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m28",
    title: "F9: The Fast Saga",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m29",
    title: "Jungle Cruise",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m30",
    title: "Stillwater",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m31",
    title: "Mortal Kombat",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m32",
    title: "CODA",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m33",
    title: "Sweet Girl",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m34",
    title: "The Tomorrow War",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m35",
    title: "The Protege",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m36",
    title: "Wrath of Man",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m37",
    title: "Snake Eyes",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m38",
    title: "Nobody",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m39",
    title: "Zack Snyder's Justice League",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m40",
    title: "Luca",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m41",
    title: "The Witcher: Nightmare of the Wolf",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },
  {
    _id: "m42",
    title: "The Conjuring: The Devil Made Me Do It",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2021-01-01",
    releaseYear: 2021,
    isLoved: false,
  },

  {
    _id: "m43",
    title: "Terminator 2",
    image:
      "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1577535818/content-items/003/551/575/T2_POSTER_sRGB-original.jpg?1577535818",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m44",
    title: "The Godfather",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: { _id: "g5", name: "Crime" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m45",
    title: "Indiana Jones & The Kindom Of The Crystal Skull",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg",
    genre: { _id: "g2", name: "Adventure" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m46",
    title: "Avatar",
    image:
      "https://i.pinimg.com/originals/17/aa/71/17aa718c1ab15b482505b8431cf596fc.jpg",
    genre: { _id: "g11", name: "Sci-fi" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m47",
    title: "Jurassic World: Fallen Kingdom",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/Jurassic_World_Fallen_Kingdom.png",
    genre: { _id: "g11", name: "Sci-fi" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m48",
    title: "Pirates Of The Carribean: The Curse Of The Black Pearl",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m49",
    title: "Fast & The Furious",
    image:
      "https://i.pinimg.com/originals/54/65/32/5465323d535429ad4d16de0214b827d0.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m50",
    title: "Chasing Liberty",
    image:
      "https://i.pinimg.com/originals/7c/40/de/7c40de0149e2843278e1438229f75ca5.jpg",
    genre: { _id: "g10", name: "Romance" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m51",
    title: "The Dark Knight",
    image:
      "https://i.pinimg.com/564x/46/0d/32/460d3292fc5dd7a61d9ca0fca9872eb0.jpg",
    genre: { _id: "g1", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m52",
    title: "A Million Ways To Die In The West",
    image:
      "https://movieguide.b-cdn.net/wp-content/uploads/2014/05/a-million-ways-to-die-in-the-west-1.25683.jpg",
    genre: { _id: "g4", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m53",
    title: "The Prestige",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
    genre: { _id: "g6", name: "Drama" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
  {
    _id: "m54",
    title: "Django Unchained",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    genre: { _id: "g14", name: "Western" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    releaseDate: "2018-01-01",
    isLoved: false,
  },
];

export function getMovies() {
  return movies.filter((m) => m);
}

export function getMovie(movieId) {
  return movies.find((m) => m._id === movieId);
}