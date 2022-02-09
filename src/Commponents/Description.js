import { React, useState, useEffect } from "react";
import NavBar from "../NavBar";
import {useParams} from 'react-router-dom'
function Description({movies}) {
  // const [movie, setMovie] = useState("");
  // useEffect(() => {
  //   setMovie(movie.find((el) => el.title == match.params.title));
  // }, []);
  const {title}= useParams();
  console.log(movies)
  const movie=movies.find(el=>el.title===title)
  console.log(movie)
  return (
    <div>
      <NavBar />
      <div>
        {/* <h5 className="Title">{movie.title}</h5> */}
        <h1>{movie.description}</h1>
      </div>
    </div>
  );
}

export default Description;
