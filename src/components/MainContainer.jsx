import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    
    const {title, overview, id} = mainMovie;
  return (
    <div className='relative w-full'>
      <div className='relative w-full aspect-video overflow-hidden'>
        <VideoTitle movieId={id}/>
        <VideoBackground title={title} overview={overview}/>
      </div>
      {/* <SecondaryContainer/> */}
    </div>
  )
}

export default MainContainer