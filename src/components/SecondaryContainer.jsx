import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
  const popular = useSelector((store)=> store?.movies?.popularMovies)
  const topRated = useSelector((store)=> store?.movies?.topRatedMovies)
  const upcoming = useSelector((store)=> store?.movies?.upcomingMovies)
  // console.log(topRated)
  return (
    <div className='relative z-40 md:-mt-52 lg:-mt-64'>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Popular"} movies={popular}/>
      <MovieList title={"Top Rated"} movies={topRated}/>
      <MovieList title={"Upcoming"} movies={upcoming}/>
    </div>
  )
}

export default SecondaryContainer