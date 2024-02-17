import React from "react";
import { actors, movies } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {movies
              .filter((movie) => movie.stars.includes(actor.name))
              .map((movie, index) => (
                <li key={index}>{movie.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
