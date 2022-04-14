import React, { Component } from "react";
// import { toast } from "react-toastify";
// import { getLanguages } from "../services/fakeLanguageService";
// import * as genresApi from "../services/genreService";
// import * as moviesApi from "../services/movieService";
// import { getReleaseYears } from "../services/releaseYearService";
// import FilterSideBar from "./common/filterSideBar";
// import Pagination from "./common/pagination";
// import ProductCard from "./common/productCard";
// import imgNotFound from "../files/no-img.png";
import Products from "./common/products";

class Movies extends Component {
  render() {
    return (
      <>
        <Products productType="movie" />
      </>
    );
  }

  // state = {
  //   genres: [],
  //   releaseYears: [],
  //   languages: [],
  //   movies: [],
  //   totalPages: 0,
  //   currentPage: 1,
  //   selectedGenre: {},
  //   selectedYear: {},
  //   selectedLanguage: {},
  // };

  // async componentDidMount() {
  //   const genreList = await genresApi.getGenres("movie");
  //   const genres = [{ id: "", name: "All Genres" }, ...genreList];
  //   const selectedGenre = genres[0];
  //   const releaseYears = getReleaseYears();
  //   const selectedYear = releaseYears[0];
  //   const languages = [
  //     { _id: "", shortCode: "", name: "All" },
  //     ...getLanguages(),
  //   ];
  //   const selectedLanguage = languages[0];

  //   this.setState({
  //     genres,
  //     selectedGenre,
  //     releaseYears,
  //     selectedYear,
  //     languages,
  //     selectedLanguage,
  //   });

  //   await this.populateMovies();
  // }

  // populateMovies = async () => {
  //   const { selectedLanguage, selectedGenre, selectedYear, currentPage } =
  //     this.state;

  //   try {
  //     const { data } = await moviesApi.getMovies(
  //       selectedLanguage.shortCode,
  //       selectedGenre.id,
  //       selectedYear.year,
  //       currentPage
  //     );

  //     const movies = data.results
  //       .map((movie) => {
  //         movie.poster_path = !movie.poster_path
  //           ? imgNotFound
  //           : "http://image.tmdb.org/t/p/w500" + movie.poster_path;
  //         return movie;
  //       })
  //       .splice(0, 18);

  //     this.setState({ movies, totalPages: data.total_pages });
  //   } catch (error) {
  //     if (error.response && error.response.status === 401)
  //       toast.error(
  //         "Unauthorized action. Please, contact the customer support."
  //       );
  //   }
  // };

  // render() {
  //   return (
  //     <section className="mt-5">
  //       <div className="col-sm-12 row g-0">
  //         <div className="col-sm-2">
  //           <FilterSideBar
  //             languages={this.state.languages}
  //             selectedLanguage={this.state.selectedLanguage}
  //             genres={this.state.genres}
  //             selectedGenre={this.state.selectedGenre}
  //             releaseYears={this.state.releaseYears}
  //             selectedYear={this.state.selectedYear}
  //             handleItemSelect={this.handleItemSelect}
  //           />
  //         </div>

  //         <div className="col-sm-8 alt-px-5">
  //           <div className="row col-sm-12 mt-4">
  //             <div className="col-6 p-0">
  //               <h1 className="font-syncopate-600 font-size-25 text-mold-white">
  //                 Movies
  //               </h1>
  //             </div>
  //             <div className="col-6 p-0">
  //               <input
  //                 type="text"
  //                 className="form-control w-75 bg-black float-end font-rubik-600 font-size-13 placeholder-right border-0"
  //                 placeholder="Search  &#xf002;"
  //               />
  //             </div>
  //           </div>
  //           <div className="row col-sm-12 mt-4">
  //             <ProductCard
  //               items={this.state.movies}
  //               valueProperty="id"
  //               nameProperty="title"
  //               imageProperty="poster_path"
  //             />
  //           </div>
  //           <div className="row col-12 mt-4">
  //             <Pagination
  //               currentPage={this.state.currentPage}
  //               totalPages={this.state.totalPages}
  //               handlePageChange={this.handlePageChange}
  //             />
  //           </div>
  //         </div>
  //         <div className="col-sm-2"></div>
  //       </div>
  //     </section>
  //   );
  // }

  // handlePageChange = async (data) => {
  //   const currentPage = data.selected + 1;
  //   this.setState({ currentPage }, () => {
  //     this.populateMovies();
  //   });
  // };

  // handleItemSelect = async (item) => {
  //   const { languages, genres, releaseYears } = this.state;

  //   if (languages.includes(item)) {
  //     this.setState({ selectedLanguage: item, currentPage: 1 }, () => {
  //       this.populateMovies();
  //     });
  //   }

  //   if (genres.includes(item)) {
  //     this.setState({ selectedGenre: item, currentPage: 1 }, () => {
  //       this.populateMovies();
  //     });
  //   }

  //   if (releaseYears.includes(item)) {
  //     this.setState({ selectedYear: item, currentPage: 1 }, () => {
  //       this.populateMovies();
  //     });
  //   }
  // };
}

export default Movies;
