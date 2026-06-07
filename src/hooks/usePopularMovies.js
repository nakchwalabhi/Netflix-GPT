import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        getPopularMovies();
        },[])
    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTION)
        const json = await data.json();
        console.log(json)
    dispatch(addPopularMovies(json.results))
    
  }
}
export default usePopularMovies;