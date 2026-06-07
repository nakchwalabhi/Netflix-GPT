import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const MovieList = ({movies, title}) => {
    
    const rowRef = useRef(null)

    const handleWheelScroll = (e) => {
      if (!rowRef.current) return

      // Convert vertical wheel movement into horizontal scrolling for desktop users.
      if (Math.abs(e.deltaY) > 0) {
        rowRef.current.scrollLeft += e.deltaY
        
      }
    }

    if(!movies) return
  return (
    <div className='px-6 md:px-12 py-5 bg-linear-to-t from-black via-black/80 to-transparent'>
        <div className='mb-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-white mb-2'>{title}</h1>
          <div className='h-1 w-20 bg-linear-to-r from-red-600 to-red-700 rounded'></div>
        </div>
        <div
          ref={rowRef}
          onWheel={handleWheelScroll}
          className='flex flex-row overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-4 cursor-grab active:cursor-grabbing'
        > 
            {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
    </div>
  )
}

export default MovieList