
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <div className="absolute z-10 w-full">
      <Navbar/>
      </div>
      
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      
    </div>
  );
};

export default Browse;
