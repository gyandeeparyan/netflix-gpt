import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useDispatch, useSelector } from "react-redux";
import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

import { toggleGPTSearch } from "../utils/gptSlice";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { setLoading } from "../utils/moviesSlice";
import Footer from "./Footer";


const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();
  

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (

    <>
      <Header />
      {showGPT ? (
        <>
          <GPTSearch />
          {/*
          MOBILE - MENU BELOW
          */}
          <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[0px] h-[52px]  w-screen z-50 '>
            <Link to={"/"}>
              <Home className='my-3' />
            </Link>

          
            <Rocket
              fill='yellow'
              color='yellow'
              onClick={() => dispatch(toggleGPTSearch())}
              className='my-3'
            />
            <Link to={"/user"}>
              <User2 className='my-3' />
            </Link>
          </div>
        </>
      ) : (
        
        <>
          <HeroContainer />
          {/* <Footer/> */}
          <MoviesListContainer />
          <Footer/>
        </>
      )}
    </>
  );
};

export default Browse;
