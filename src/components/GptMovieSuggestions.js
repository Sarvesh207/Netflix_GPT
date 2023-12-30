import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((state) => state.gpt);

  console.log(movieResults);
  console.log(movieNames);

  if (!movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {
          movieNames.map((movieName, index )=> <MoviesList key={movieName} title={movieName} movies={movieResults[index]} />)
        }
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
