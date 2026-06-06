import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
    if(!movies) return
  return (
    <div className='px-6 md:px-12 py-8 bg-black'>
        <div className='mb-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-white mb-2'>Now Playing</h1>
          <div className='h-1 w-20 bg-linear-to-r from-red-600 to-red-700 rounded'></div>
        </div>
        <div className='flex flex-row overflow-x-scroll scrollbar-hide scroll-smooth'> 
            {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
    </div>
  )
}

export default MovieList