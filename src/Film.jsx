// Film.js
import React, { useState, useEffect } from 'react';
import movies from './movies';
import { useParams } from 'react-router-dom';

const Film = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Simulate fetching film details from an API or data source
    const fetchFilmDetails = async () => {
      // Replace this with your actual data fetching logic
      const film = movies.find((movie) => movie.id === parseInt(params.id));

      if (film) {
        setFilmDetails(film);
      } else {
        // Handle case where film details are not found
        setFilmDetails(null);
      }
    };

    fetchFilmDetails();
  }, [params]);

  const getOtherFilmDescriptions = (id) => {
    // Replace this with your actual data fetching logic
    const otherFilms = movies.filter((movie) => movie.id !== parseInt(id));
    return otherFilms.map((otherFilm) => ({
      id: otherFilm.id,
      title: otherFilm.title,
      description: otherFilm.description,
    }));
  };

  // Use the function to get descriptions of other films
  const otherFilmDescriptions = getOtherFilmDescriptions(params.id);

  // Check if filmDetails is null before rendering
  if (!filmDetails) {
    return <div>Film details not found</div>;
  }



  return (
    <div style={{ marginLeft: 200, marginRight: 200 }}>
      <p>ID du film : {filmDetails.id}</p>
      <h1>Title: {filmDetails.title}</h1>
      <h2>Description: {filmDetails.description}</h2>
      {/* Use otherFilmDescriptions in your JSX */}
   
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${filmDetails.trailerlink}`}
        title="The Matrix Resurrections – Official Trailer 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Film;
