import React, { Component } from "react";
import video1 from "../files/videos/M-Flix-Promo-3.m4v";

class Home extends Component {
  render() {
    return (
      <div className="">
        <section className="row">
          <div className="container bg-black px-6">
            <div className="row">
              <div
                className="col-sm-6 row align-items-center m-0 border-grey border-left-0 border-top-0 border-bottom-0 text-end text-light"
                style={{ height: "400px" }}
              >
                <div>
                  <h2 className=" font-blackops-400 font-size-55 text-uppercase mb-4">
                    Enjoy On Your TV
                  </h2>

                  <p className="font-rubik-400 font-size-20">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-6 row align-items-center m-0 py-5"
                style={{ height: "400px" }}
              >
                <video autoPlay loop playsInline muted>
                  <source src={video1} />
                </video>
              </div>
            </div>

            <div className="row">
              <div
                className="col-sm-6 row justify-content-end align-items-center m-0 py-5 border-grey border-left-0 border-top-0 border-bottom-0"
                style={{ height: "400px" }}
              >
                <video autoPlay loop playsInline muted>
                  <source src={video1} />
                </video>
              </div>
              <div
                className="col-sm-6 row text-start align-items-center text-light m-0"
                style={{ height: "400px" }}
              >
                <div>
                  <h2 className=" font-blackops-400 font-size-55 text-uppercase mb-4">
                    Download your shows to watch offline
                  </h2>

                  <p className="font-rubik-400 font-size-20">
                    Save your favorites easily and always have something to
                    watch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
