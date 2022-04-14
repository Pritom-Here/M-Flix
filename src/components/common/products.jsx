import React, { Component } from "react";
import { toast } from "react-toastify";
import * as FaIcons from "react-icons/fa";
import FilterSideBar from "./filterSideBar";
import ProductCard from "./productCard";
import Pagination from "./pagination";
import * as genresApi from "../../services/genreService";
import { getReleaseYears } from "../../services/releaseYearService";
import { getLanguages } from "../../services/fakeLanguageService";
import * as moviesApi from "../../services/movieService";
import * as tvShowsApi from "../../services/tvShowService";
import imgNotFound from "../../files/no-img.png";

class Products extends Component {
  state = {
    genres: [],
    releaseYears: [],
    languages: [],
    moviesOrTvShows: [],
    totalPages: 0,
    currentPage: 1,
    selectedGenre: {},
    selectedYear: {},
    selectedLanguage: {},
    filterSidebarActive: false,
  };

  async componentDidMount() {
    const { productType } = this.props;

    const genreList = await genresApi.getGenres(productType);
    const genres = [{ id: "", name: "All Genres" }, ...genreList];
    const selectedGenre = genres[0];
    const releaseYears = getReleaseYears();
    const selectedYear = releaseYears[0];
    const languages = [
      { _id: "", shortCode: "", name: "All" },
      ...getLanguages(),
    ];
    const selectedLanguage = languages[0];

    this.setState({
      genres,
      selectedGenre,
      releaseYears,
      selectedYear,
      languages,
      selectedLanguage,
    });

    await this.populateMoviesOrShows();
  }

  populateMoviesOrShows = async () => {
    const { productType } = this.props;
    const { selectedLanguage, selectedGenre, selectedYear, currentPage } =
      this.state;

    try {
      const { data } =
        productType === "movie"
          ? await moviesApi.getMovies(
              selectedLanguage.shortCode,
              selectedGenre.id,
              selectedYear.year,
              currentPage
            )
          : await tvShowsApi.getTvShows(
              selectedLanguage.shortCode,
              selectedGenre.id,
              selectedYear.year,
              currentPage
            );

      const moviesOrTvShows = data.results
        .map((item) => {
          item.poster_path = !item.poster_path
            ? imgNotFound
            : "http://image.tmdb.org/t/p/w500" + item.poster_path;
          return item;
        })
        .splice(0, 18);

      this.setState({ moviesOrTvShows, totalPages: data.total_pages });
    } catch (error) {
      if (error.response && error.response.status === 401)
        toast.error(
          "Unauthorized action. Please, contact the customer support."
        );
    }
  };

  render() {
    const heading = this.props.productType === "movie" ? "Movies" : "Shows";
    return (
      <section className="mt-11">
        <div className="col-sm-12 row g-0 mx-0">
          <FilterSideBar
            languages={this.state.languages}
            selectedLanguage={this.state.selectedLanguage}
            genres={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            releaseYears={this.state.releaseYears}
            selectedYear={this.state.selectedYear}
            handleItemSelect={this.handleItemSelect}
            isActive={this.state.filterSidebarActive}
            closeFilterSidebar={this.toggleFilterSidebar}
          />

          <div className="col-sm-12 col-md-12 col-lg-8 px-5">
            <div className="row col-sm-12 mt-4 mx-0">
              <div className="d-flex col-lg-6 col-xl-6 p-0">
                <h1 className="font-syncopate-600 font-size-25 text-mold-white mb-4">
                  {heading}
                </h1>

                <button
                  className={this.getFilterButtonClasses()}
                  onClick={() => this.toggleFilterSidebar()}
                >
                  <FaIcons.FaBars className="me-2 mb-1" /> Filter
                </button>
              </div>
              <div className="col-lg-6 col-xl-6 p-0">
                <input
                  type="text"
                  className={this.getSearchBoxClasses()}
                  placeholder="Search  &#xf002;"
                />
              </div>
            </div>

            <div className="row col-sm-12 mt-4 mx-0">
              <ProductCard
                items={this.state.moviesOrTvShows}
                valueProperty="id"
                nameProperty={
                  this.props.productType === "movie" ? "title" : "name"
                }
                imageProperty="poster_path"
              />
            </div>
            <div className="row col-12 mt-4">
              <Pagination
                currentPage={this.state.currentPage}
                totalPages={this.state.totalPages}
                handlePageChange={this.handlePageChange}
              />
            </div>
          </div>
          <div className="col-sm-0 col-md-0 col-lg-2"></div>
        </div>
      </section>
    );
  }

  handlePageChange = async (data) => {
    const currentPage = data.selected + 1;
    this.setState({ currentPage }, () => {
      this.populateMoviesOrShows();
    });
  };

  handleItemSelect = async (item) => {
    const { languages, genres, releaseYears } = this.state;

    if (languages.includes(item)) {
      this.setState({ selectedLanguage: item, currentPage: 1 }, () => {
        this.populateMoviesOrShows();
      });
    }

    if (genres.includes(item)) {
      this.setState({ selectedGenre: item, currentPage: 1 }, () => {
        this.populateMoviesOrShows();
      });
    }

    if (releaseYears.includes(item)) {
      this.setState({ selectedYear: item, currentPage: 1 }, () => {
        this.populateMoviesOrShows();
      });
    }
  };

  getFilterButtonClasses = () => {
    let classes =
      "btn btn-outline-dark font-rubik-400 font-size-14 text-light ms-auto mb-4 ";
    return (classes += window.innerWidth > 991 ? "d-none" : "");
  };

  getSearchBoxClasses = () => {
    let classes =
      "form-control bg-black float-end font-rubik-600 font-size-13 placeholder-right ";
    return (classes +=
      window.innerWidth <= 991 ? "w-100 border-fire-engine" : "w-75 border-0");
  };

  toggleFilterSidebar = () => {
    const filterSidebarActive = this.state.filterSidebarActive ? false : true;

    this.setState({ filterSidebarActive });
  };
}

export default Products;
