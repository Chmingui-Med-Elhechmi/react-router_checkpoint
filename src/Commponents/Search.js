import React from "react";
import StarRatingComponent from "react-star-rating-component";
const Search = ({ search, setRate, newRate }) => {
  const onStarClick = (nextValue) => {
    setRate(nextValue);
  };
  return (
    <div>
      <div className="topnav">
        <div className="searchtxt">
          <input
            onChange={(e) => search(e.target.value)}
            type="text"
            placeholder="Search.."
            className="ser"
          />
        </div>
        <div className="stars">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={newRate}
            onStarClick={onStarClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
