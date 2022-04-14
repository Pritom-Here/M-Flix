import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderNav from "./header-nav";
//import bgVideo from "../files/videos/M-Flix-Promo-2.mp4";
import { getHeaderBanners } from "../services/headerBannerService";

const Header = () => {
  const [banners, setBanners] = useState([]);
  const location = useLocation();

  useEffect(() => {
    function populateBanners() {
      const bannerList = getHeaderBanners();
      setBanners(bannerList);
    }
    populateBanners();
  }, []);

  function getCarouselClasses() {
    let classes = "w-100 vh-100 carousel slide px-0 ";
    return (classes += location.pathname === "/home" ? "" : "d-none");
  }

  return (
    <header className="row position-relative">
      <HeaderNav />
      {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 vh-100 p-0"
          src={bgVideo}
        ></video> */}
      {/* <div className="w-100 vh-100 header-bg-img"></div> */}

      <div
        id="carouselExampleSlidesOnly"
        className={getCarouselClasses()}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banners.map((movie) => (
            <div
              key={movie.id}
              className={
                movie.id === 1 ? "carousel-item active" : "carousel-item"
              }
            >
              <img
                src={movie.image}
                className="d-block w-100 vh-100 object-fit-cover filter-bright-saturate"
                alt={movie.title}
              />
              <div className="carousel-caption d-none d-md-block mb-8">
                <h5 className="font-blackops-900 font-size-45 text-light mb-4 px-5">
                  {movie.title}
                </h5>
                <i className="font-rubik-600 font-size-25 text-light bg-black p-3 opacity-75">
                  " " {movie.quote} " "
                </i>
                <p className="font-rubik-600 font-size-20 text-warning mt-4">
                  IMDB Rating: {movie.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

// class Header extends Component {
//   state = {
//     banners: [],
//   };

//   componentDidMount() {
//     const banners = getHeaderBanners();
//     this.setState({ banners });
//   }

//   render() {
//     return (
//       <header className="row position-relative">
//         <HeaderNav />
//         {/* <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-100 vh-100 p-0"
//           src={bgVideo}
//         ></video> */}
//         {/* <div className="w-100 vh-100 header-bg-img"></div> */}

//         <div
//           id="carouselExampleSlidesOnly"
//           className="w-100 vh-100 carousel slide px-0"
//           data-bs-ride="carousel"
//         >
//           <div className="carousel-inner">
//             {this.state.banners.map((movie) => (
//               <div
//                 key={movie.id}
//                 className={
//                   movie.id === 1 ? "carousel-item active" : "carousel-item"
//                 }
//               >
//                 <img
//                   src={movie.image}
//                   style={{
//                     objectFit: "cover",
//                     filter: "brightness(40%) saturate(200%)",
//                   }}
//                   className="d-block w-100 vh-100"
//                   alt={movie.title}
//                 />
//                 <div className="carousel-caption d-none d-md-block mb-8">
//                   <h5 className="font-blackops-900 font-size-45 text-light mb-4 px-5">
//                     {movie.title}
//                   </h5>
//                   <i className="font-rubik-600 font-size-25 text-light bg-black p-3 opacity-75">
//                     " " {movie.quote} " "
//                   </i>
//                   <p className="font-rubik-600 font-size-20 text-warning mt-4">
//                     IMDB Rating: {movie.rating}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>
//     );
//   }

//   // getCarouselClasses = () => {
//   //   const pathname = this.props.location.pathname;
//   //   let classes = "w-100 vh-100 carousel slide px-0 ";
//   //   return (classes += pathname === "/home" ? "" : "d-none");
//   // };
// }

// export default Header;
