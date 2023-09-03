import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesListContainer from "./MoviesListContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
useNowPlayingMovies()
usePopularMovies()





  return (
    <>
      <Header />
      <HeroContainer/>
      <MoviesListContainer/>










    </>
  );
};

export default Browse;
