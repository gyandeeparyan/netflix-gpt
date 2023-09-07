import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <>
      <div className='bg-black text-white '>
        <div className=' -mt-[0px] md:-mt-48 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    </>
  );
};

export default MoviesListContainer;
