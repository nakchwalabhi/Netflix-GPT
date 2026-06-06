import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
   useNowPlayingMovies();
   
  return (
    <div className="bg-black min-h-screen">
      <Header showUserControls={true} />
      <div className='pt-0'>
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </div>
  );
};
export default Browse