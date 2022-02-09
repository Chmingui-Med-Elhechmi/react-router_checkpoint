import React from "react";
import "./MovieCard.css";
import StarRatings from "react-star-ratings";

function MovieCard(props) {
  return (
    <div className="card movie_card">
      <img src={props.movies.posterURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.movies.title}</h5>
        <p className="description">{props.movies.description}</p>
        <StarRatings
          rating={Number(props.movies.rating)}
          starRatedColor="yellow"
          numberOfStars={5}
          name="rating"
          starDimension="22px"
        />
      </div>
    </div>
  );
}

export default MovieCard;
