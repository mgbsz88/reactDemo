import React from "react";
import Like from "../common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")} scope="col">
            Title
          </th>
          <th onClick={() => onSort("genre.name")} scope="col">
            Genre
          </th>
          <th onClick={() => onSort("numberInStock")} scope="col">
            Stock
          </th>
          <th onClick={() => onSort("dailyRentalRate")} scope="col">
            Rate
          </th>
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClickLike={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr />
      </tbody>
    </table>
  );
};

export default MoviesTable;
