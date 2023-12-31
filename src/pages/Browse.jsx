import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="absolute z-10 w-full">
        <MainContainer />
        <SecondaryContainer />
      
    </div>
  );
};

export default Browse;
