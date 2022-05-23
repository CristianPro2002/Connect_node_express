import React from "react";

const MoviesLists = ({ movies, setListupdate, movie, setMovie }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListupdate(true);
  };

  let { title, date, type } = movie;

  const handleUpdate = (id) => {
    if (title === "" || date === "" || type === "") {
      alert("todos los campos son obligatorios");
      return;
    }
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    };
    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setMovie({
      title: "",
      date: "",
      type: "",
    });

    setListupdate(true);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.date}</td>
            <td>{movie.type}</td>
            <td>
              <div className="mb-2">
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(movie.id)}
                >
                  Editar
                </button>
              </div>
              <div className="mb-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie.id)}
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesLists;
