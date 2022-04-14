import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";
import { getHeaderNavs } from "../services/navItemService";

class HeaderNav extends Component {
  state = {
    navItems: [],
    selectedItem: {},
  };

  componentDidMount() {
    const navItems = getHeaderNavs();
    const selectedItem = navItems[0];
    this.setState({ navItems, selectedItem });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md justify-content-center py-5 z-index-1500 position-absolute left right top">
        <div className="container">
          <Link
            className="navbar-brand d-flex w-logo me-auto text-white fw-bold pt-0"
            to="/home"
          >
            M-Flix
          </Link>

          <button
            className="navbar-toggler p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="text-white" />
          </button>

          <div
            className="collapse navbar-collapse w-nav-area"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-pills w-nav justify-content-center bg-grey border-rad-min font-rubik-500">
              {this.state.navItems.map((nav) => (
                <li
                  key={nav.id}
                  className="nav-item"
                  onClick={() => this.handleNavItemChange(nav)}
                >
                  <Link
                    className={
                      this.state.selectedItem === nav
                        ? "nav-link2 active2"
                        : "nav-link2"
                    }
                    to={nav.to}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}

              {/* <li className="nav-item">
                <Link className="nav-link2 active2" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link2" to="/movie">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link2" to="/tv">
                  Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link2" to="/watch-list">
                  Watchlist
                </Link>
              </li> */}
            </ul>

            <ul className="navbar-nav nav2 ms-auto w-subscribe justify-content-end">
              <li className="nav-item">
                <Link
                  to=""
                  className="subscribe nav-link bg-grey text-white text-center py-1"
                >
                  <FaUser className="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  handleNavItemChange = (nav) => {
    this.setState({ selectedItem: nav });
  };
}

export default HeaderNav;
