import React, { Component } from "react";
import ReactPaginate from "react-paginate";

class Pagination extends Component {
  render() {
    const { currentPage, totalPages, handlePageChange } = this.props;
    return (
      <>
        <ReactPaginate
          forcePage={currentPage - 1}
          previousLabel="Prev"
          nextLabel="Next"
          breakLabel=" . . . "
          pageCount={totalPages}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName="pagination justify-content-center p-0 font-size-12"
          pageClassName="page-item"
          pageLinkClassName="page-link bg-grey text-white font-rubik-500 border-0"
          previousClassName="page-item"
          previousLinkClassName="page-link bg-grey text-white font-rubik-500 border-0"
          nextClassName="page-item"
          nextLinkClassName="page-link bg-grey text-white font-rubik-500 border-0"
          breakClassName="page-item col-2"
          breakLinkClassName="page-link bg-grey text-white font-rubik-500 border-0"
          activeClassName="active2"
        />
      </>
    );
  }
}

export default Pagination;
