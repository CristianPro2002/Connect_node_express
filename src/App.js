import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MoviesLists from "./components/MoviesLists";
import Form from "./components/Form";

function App() {
  const [movie, setMovie] = useState({
    title: "",
    date: "",
    type: "",
  });
  const [movies, setMovies] = useState([]);
  const [listupdate, setListupdate] = useState(false);

  useEffect(() => {
    const getMovies = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setMovies(res));
    };

    getMovies();
    setListupdate(false);
  }, [listupdate]);

  return (
    <Fragment>
      <Navbar brand="Conexion Node" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Movies Lists</h2>
            <MoviesLists
              movies={movies}
              setListupdate={setListupdate}
              movie={movie}
              setMovie={setMovie}
            />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Form Movie</h2>
            <Form movie={movie} setMovie={setMovie} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
