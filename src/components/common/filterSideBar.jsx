import React, { Component } from "react";
import ListGroup from "./listGroup";

class FilterSideBar extends Component {
  render() {
    const {
      languages,
      selectedLanguage,
      genres,
      selectedGenre,
      releaseYears,
      selectedYear,
      handleItemSelect,
      closeFilterSidebar,
    } = this.props;
    return (
      <div className={this.getSidebarContainerClasses()}>
        <button
          className={this.getSidebarCloseButtonClasses()}
          onClick={() => closeFilterSidebar()}
        >
          X
        </button>
        <ListGroup
          compContainerClasses="mt-5 ps-5 ps-sm-5 ps-md-3 ps-lg-3 ps-xl-5 pe-3"
          listGrpContainerClasses="ps-2 pe-4 mt-10 h-15 overflow-y scroll scroll-thin scroll-smooth"
          items={languages}
          selectedItem={selectedLanguage}
          valueProperty="_id"
          textProperty="name"
          handleItemSelect={handleItemSelect}
        />
        <ListGroup
          compContainerClasses="mt-5 ps-5 ps-sm-5 ps-md-3 ps-lg-3 ps-xl-5 pe-3"
          listGrpContainerClasses="ps-2 pe-4 h-15 overflow-y scroll scroll-thin scroll-smooth"
          items={genres}
          selectedItem={selectedGenre}
          valueProperty="id"
          textProperty="name"
          handleItemSelect={handleItemSelect}
        />
        <ListGroup
          compContainerClasses="mt-5 ps-5 ps-sm-5 ps-md-3 ps-lg-3 ps-xl-5 pe-3"
          listGrpContainerClasses="ps-2 pe-4 h-15 overflow-y scroll scroll-thin scroll-smooth"
          items={releaseYears}
          selectedItem={selectedYear}
          valueProperty="_id"
          textProperty="year"
          handleItemSelect={handleItemSelect}
        />
      </div>
    );
  }

  getSidebarContainerClasses = () => {
    let classes =
      window.innerWidth > 991
        ? "col-sm-2 col-md-3 col-lg-2"
        : !this.props.isActive
        ? "sidebar fixed-top bg-black"
        : "sidebar active fixed-top bg-black";
    return classes;
  };

  getSidebarCloseButtonClasses = () => {
    let classes =
      "btn btn-sm btn-outline-danger border-0 float-end font-syncopate-400 font-size-20 ";
    return (classes += window.innerWidth > 991 ? "d-none" : "");
  };
}

export default FilterSideBar;
