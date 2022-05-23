import React from "react";

const Form = ({ movie, setMovie }) => {
  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  let { title, date, type } = movie;

  const handleSubmit = () => {
    if (title === "" || date === "" || type === "") {
      alert("todos los campos son obligatorios");
      return;
    }
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    };
    fetch("http://localhost:9000/api", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setMovie({
      title: "",
      date: "",
      type: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          value={title}
          name="title"
          onChange={handleChange}
          type="text"
          id="title"
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          value={date}
          name="date"
          onChange={handleChange}
          type="date"
          id="date"
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="Type" className="form-label">
          Type
        </label>
        <input
          value={type}
          name="type"
          onChange={handleChange}
          type="text"
          id="Type"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
