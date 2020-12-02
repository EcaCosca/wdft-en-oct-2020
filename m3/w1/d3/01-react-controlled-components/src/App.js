import React, { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css'

import List from "./components/List";
import MovieList from './components/MovieList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />

        <MovieList />
      </div>
    );
  }
}

export default App;
