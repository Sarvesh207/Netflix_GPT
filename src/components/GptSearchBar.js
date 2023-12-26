import React, { useRef } from "react";
import lang from "../utils/langaugeConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMoviesResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // console.log(searchText.current.value);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  }



  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);

    const  gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + "only give name of 5 movies, seperated like the example result given ahed. Example Result : Gadhar, Sholey, Don, Golmal, Koi Mil Gaya";

    //Make an API call to GPT and get Movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices?.[0]?.message?.content.split(","));
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // for each movie name, fetch the movie details from TMDB API
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const tmdbresults = await Promise.all(promiseArray)

    console.log(tmdbresults);
    dispatch(addGptMoviesResult({moviesNames:gptMovies, moviesResults:tmdbresults}));

  

    
    

  

  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 outline-none"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />

        <button
          className="col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search} 

        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
