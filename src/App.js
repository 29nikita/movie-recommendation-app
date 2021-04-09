import "./styles.css";
import React, { useState } from "react";

const moviesDB = {
  horror: [
    { name: "Psycho", rating: "4.5/5" },
    { name: "Rosemary's Baby", rating: "4/5" }
  ],

  scifi: [
    { name: "Inception", rating: "4.5/5" },
    { name: "Avatar", rating: "4/5" }
  ],

  comedy: [
    { name: "Modern Times", rating: "4.5/5" },
    { name: "City Lights", rating: "4.5/5" }
  ]
};

const genres = Object.keys(moviesDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("horror");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🍿 goodmovies</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favourite movies. Select a genre to get started
      </p>
      {genres.map((genre) => (
        <button
          key={genre}
          style={{
            margin: "1rem 0.3rem",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid black"
          }}
          onClick={() => genreClickHandler(genre)}
        >
          {genre}
        </button>
      ))}
      <div style={{ textAlign: "left" }}>
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.3rem",
                width: "70%",
                margin: "1rem 0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
