import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
      <Header />
      {showGPT ? (
        <GPTSearch />
      ) : (
        <>
          <HeroContainer />
          <MoviesListContainer />
        </>
      )}
    </>
  );
};

export default Browse;
