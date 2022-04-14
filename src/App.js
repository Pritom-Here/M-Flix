import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/common/footer";
import Home from "./components/home";
import Movies from "./components/movies";
import TvShows from "./components/tvShows";
import "./App.css";
import "./fonts.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ToastContainer />
        <div className="container-fluid">
          <Header />
          {/* <HeaderNav /> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/movie" component={Movies} />
            <Route path="/tv" component={TvShows} />
            <Redirect from="/" exact to="/home" />
          </Switch>

          <Footer />
        </div>
      </>
    );
  }
}

//https://dribbble.com/shots/9443830-The-Witcher
//https://dribbble.com/shots/4664190-Movie-header
//https://dribbble.com/shots/8173066--64-2-Shots-for-Practice

export default App;
