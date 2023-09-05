import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";

import { Languages } from "lucide-react";
import { toggleGPTSearch } from "../utils/gptSlice";

const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
      <Header />
      {showGPT ? (
        <>
          <GPTSearch />
          <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[45] h-full w-screen z-50 '>
            <Home className='my-3' />
            <Languages className='my-3' />
            <Rocket
              onClick={() => dispatch(toggleGPTSearch())}
              className='my-3'
            />
            <User2 className='my-3' />
          </div>
        </>
      ) : (
        <>
          <HeroContainer />
          <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[45] h-full w-screen z-50 '>
            <Home className='my-3' />
            <Languages className='my-3' />
            <Rocket
              onClick={() => dispatch(toggleGPTSearch())}
              className='my-3'
            />
            <User2 className='my-3' />
          </div>
          <MoviesListContainer />
        </>
      )}
    </>
  );
};

export default Browse;
