import "./App.css";
import { useState } from "react";
import MovieList from "./Commponents/MovieList";
import Search from "./Commponents/Search";
import NavBar from "./NavBar";
function App() {
  const [KeyWord, setKeyWord] = useState("");
  const [newRate, setNewRate] = useState(1);
  const [movies, setMovies] = useState([
    {
      title: "SPIDER MAN",
      description:
        "Spider-Man ou l'homme araignée, est né en 1962, créé par Stan Lee et Steve Ditko.",
      posterURL:
        "https://i0.wp.com/cinedweller.com/wp-content/uploads/2019/06/the-amazing-spider-man.jpg?ssl=1",
      rating: 3,
      trailer:'https://www.youtube.com/watch?v=TYMMOjBUPMM'
    },
    {
      title: "BATMAN",
      description:
        "Bruce Wayne, alias Batman, est un super-héros de fiction appartenant à l'univers de DC Comics.",
      posterURL:
        "https://img6.cdn.cinoche.com/images/c3fb81712f064356421af70523764e9d.jpg",
      rating: 4,
      trailer:'https://www.youtube.com/watch?v=neY2xVmOfUM'
    },
    {
      title: "STAR WARS",
      description:
        "L'histoire de Star Wars, se déroule dans une galaxie qui est le théâtre d'affrontements entre les Chevaliers Jedi et les Seigneurs noirs des Sith.",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png",
      rating: 5,
      trailer:'https://www.youtube.com/watch?v=sGbxmsDFVnE'
    },
    {
      title: "TITANIC",
      description:
        "Le film est basé sur le récit du naufrage du RMS Titanic et met en vedette Leonardo DiCaprio et Kate Winslet.",
      posterURL: "https://d3fa68hw0m2vcc.cloudfront.net/601/238712112.jpeg",
      rating: 3,
      trailer:'https://www.youtube.com/watch?v=ZQ6klONCq4s'
    },
    {
      title: "TRANSPORTER 2",
      description:
        "Jason Statham revient dans le rôle de Frank Martin, un « transporteur » professionnel qui livre des colis sans poser de questions.",
      posterURL: "https://c8.alamy.com/compfr/bpnpyk/katie-nauta-jason-statham-poster-transporteur-2-2005-bpnpyk.jpg",
      rating: 2,
      trailer:'https://www.youtube.com/watch?v=rEggzzOVOyo'
    }
  ]);
  const search = (text) => {
    setKeyWord(text);
  };

  const setRate = (rate) => {
    setNewRate(rate);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <NavBar/>
      <div>
        <Search search={search} setRate={setRate} newRate={newRate} />
      </div>
      <div className="movies">
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (el) =>
              el.rating >= newRate &&
              el.title.toLowerCase().includes(KeyWord.toLowerCase().trim())
          )}
          
        />
      </div>
    </div>
  );
}

export default App;
