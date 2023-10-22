import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <div className='bg-black text-white '>
        <div className=' -mt-[0px] md:-mt-48 relative z-20'>
          <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"popular"} movies={movies.popularMovies} />
          <MovieList title={"upcoming movies"} movies={movies.upcomingMovies} />
          <MovieList title={"top rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    </>
  );
};

export default MoviesListContainer;
