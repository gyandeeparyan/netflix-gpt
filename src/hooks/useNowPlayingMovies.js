import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
    const dispatch =useDispatch()
    const nowPlayingMovies= useSelector((store)=>store?.movies?.nowPlayingMovies)

  
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_OPTIONS
        );
        console.log(data);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json?.results))
       
      } catch (error) {
        console.log(error);
        
      }
     
    };
  
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies() ;
    },[])
  
}

export default useNowPlayingMovies;