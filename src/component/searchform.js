import React from "react";
import { useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";

export default function Searchform() {
  const [name, setname] = useState("");
  const [clicked, setclicked] = useState(false);
  const [resultss, setresult] = useState([]);

  function handlechange(evt) {
    setname(evt.target.value);
  }

  async function search() {
    if (name === "") {
      setclicked(false);
    } else {
      const data = await fetch(
        `http://www.omdbapi.com/?s=${name}&apikey=2654de09`
      );
      const response = await data.json();
      setresult(response.Search);

      setclicked(true);
    }
  }
  return (
    <>
      <div className="searchform">
        <input
          type="text"
          className="form-control  searchbar"
          aria-label="Sizing example input"
          value={name}
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Movie Name"
          aria-describedby="inputGroup-sizing-sm"
        />

        <button
          class="btn btn-secondary btn search-button"
          onClick={() => {
            search();
          }}
        >
          Search
        </button>
      </div>
      <div className="movie-main">
        {clicked
          ? resultss?.map((movie) => {
              return (
                <Card
                  movieinfo={movie}
                  
                />
              );
            })
          : null}
      </div>
    </>
  );
}
