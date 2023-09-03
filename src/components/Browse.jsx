import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesListContainer from "./MoviesListContainer";

const Browse = () => {
useNowPlayingMovies();




  return (
    <>
      <Header />
      <HeroContainer/>
      <MoviesListContainer/>
      









    </>
  );
};

export default Browse;
