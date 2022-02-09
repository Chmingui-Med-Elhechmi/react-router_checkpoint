import React, { useState } from "react";
import Add from "./Add";
import MovieCard from "./MovieCard";
import {Link} from 'react-router-dom'
function MovieList({ movies, addMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="add">
      <button className="addButton" onClick={handleShow}>Add Movie</button>
      <Add show={show} handleClose={handleClose} addMovie={addMovie} />
      </div>
      {movies.map((movie) => (
        <div className="image-container">
          <Link to={`/Description/${movie.title}`}>
          <MovieCard movies={movie}/>
          </Link>
        </div>
      ))}
      
    </>
  );
}

export default MovieList;
