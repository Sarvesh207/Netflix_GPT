import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className='lg:h-[45.5em] mt  md:h-[40em]' style={{background: `linear-gradient(80deg,black,transparent), url(${BG_URL})`}}>

      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      </div>
    </>
  );
};

export default GptSearch;