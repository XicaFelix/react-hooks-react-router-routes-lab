import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map((movie)=>{
    return <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>Movie Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre)=>
        <li key={Math.random()*10}>{genre}</li>
        )}
      </ul>
    </div>
  })
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
    </div>;
}

export default Movies;
