import React, { Component } from "react";
import data from "./../data";

import MovieCard from './MovieCard';
import AddMovie from './AddMovie';

class MovieList extends Component {
  state = {
    movies: data,
    showMovies: true
  }

  deleteMovie = (movieId) => {
    const filteredMovies = this.state.movies.filter((movieObj) => {
      if (movieObj._id !== movieId) { // Include the movie that is not matching the id
        return true;
      }
      else {          // exclude the move that matches the id
        return false;
      }
    })

    this.setState( { movies: filteredMovies } )
  }

  toggleMovies = () => {
    const updatedShowMovies = !this.state.showMovies;
    this.setState( { showMovies: updatedShowMovies } )
  }

  addOneMovie = (newMovie) => {
    // Add the movie to the movies array
    const updatedMovies = [ newMovie, ...this.state.movies ] 
    // Update the state
    this.setState( { movies: updatedMovies } );
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <AddMovie createMovie={this.addOneMovie} />

        <button className="btn" onClick={this.toggleMovies}>Toggle Movies</button>





    {
      this.state.showMovies 
        ? (<div>
          {this.state.movies.map( (movieObj) => {
            return (
              <MovieCard 
                key={movieObj._id} 
                
                _id={movieObj._id}
                title={movieObj.title}
                director={movieObj.director}
                IMDbRating={movieObj.IMDbRating}
                hasOscars={movieObj.hasOscars}
                deleteMovie={this.deleteMovie}
              />
            )

          })}
        </div>)
        : null
    }
      </div>
    );
  }
}

export default MovieList;


/* 
          <MovieCard 
            key={movieObj._id} 
            { ...movieObj }
          /> 
*/