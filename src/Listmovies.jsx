import React from "react";
import Movie from "./Movie";
import movies from "./movies";


function Listmovies() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {movies.map((movie, index) => (
      <Movie key ={index} {...movie} />
     
    ))}
  </div>

  );
}

export default Listmovies;
