import React from 'react'

function MovieCard(props) {
  return (
    <div className="MovieCard">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Rating: {props.IMDbRating} </p>

      {
        props.hasOscars
          ? <p>Got the Oscar Award</p>
          : <p>Great movie but no Oscars! 😔</p>
      }

      <button 
        className="btn-delete"
        onClick={ () => props.deleteMovie(props._id) }
      >
        Delete
      </button>
    </div>
  )
}

export default MovieCard
