import React from "react";

const Card = ({ movieinfo }) => {
  return (
    <div class="movie-card">
      <div class="card ">
        <h5 class="card-title card-titles">{movieinfo.Title}</h5>

        <img
          src={movieinfo.Poster}
          class="card-img-top movie-poster"
          alt="..."
          onClick={() => {
            console.log("hii");
            window.location.href = `/${movieinfo.imdbID}`;
          }}
        />
        <div class="card-body">
          <p class="card-text">{movieinfo.Year}</p>
          <p>{movieinfo.Type}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
