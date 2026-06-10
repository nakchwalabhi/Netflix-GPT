import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import GptSearch from "./GptSearch";

const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
   const isSearchOn = useSelector((store)=>store?.gpt?.showGPTSearch);
   
  return (
    <div className="bg-black min-h-screen">
      <Header showUserControls={true} />
      <div className='pt-0'>
        {!isSearchOn && (
         <> <MainContainer/>
        <SecondaryContainer/>
        </>)}
        
        <GptSearch/>
      </div>
    </div>
  );
};
export default Browse