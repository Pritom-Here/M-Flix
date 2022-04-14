import React, { Component } from "react";
import * as FaIcon from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <section className="row bg-grey mt-5">
        <div className="row g-0">
          <h3 className="font-syncopate-600 pt-5 text-center text-light">
            M-Flix
          </h3>
        </div>
        <div className="row g-0 my-5">
          <ul className="nav justify-content-center font-rubik-400 font-size-13">
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="">
                Terms of Service
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="">
                Privacy
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="">
                Security
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="row g-0 mb-5">
          <div className="col-sm-12 row g-0">
            <div className="col-md-12 col-lg-4">
              <p className="font-rubik-400 font-size-13 text-white text-center text-md-center text-lg-start px-3 px-sm-3 px-md-3 px-lg-3 px-xl-5 mx-4">
                Powered by <FaIcon.FaReact /> React
              </p>
            </div>
            <div className="col-md-12 col-lg-4">
              <ul className="nav my-3 my-lg-0 justify-content-center font-rubik-400 font-size-14">
                <li className="nav-item px-3">
                  <a className="nav-link text-white" href="">
                    <FaIcon.FaTwitter />
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-white" href="">
                    <FaIcon.FaGithub />
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-white" href="">
                    <FaIcon.FaFacebook />
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-white" href="">
                    <FaIcon.FaDribbble />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-4">
              <p className="font-rubik-400 font-size-13 text-white text-center text-lg-end px-3 px-sm-3 px-md-3 px-lg-3 px-xl-5 mx-4">
                <FaIcon.FaCopyright className="me-1" />
                {new Date().getFullYear()} Pritom Chakraborty. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
