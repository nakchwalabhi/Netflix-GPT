import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getNowPlayingMovies();
        },[])
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
        const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
    
  }
}
export default useNowPlayingMovies;