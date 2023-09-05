/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className='p-6 z-50'>
        <h1 className='text-3xl py-6'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-none scrollbar-hide'>
          <div className='flex  '>
            {movies?.map((movie) => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default MovieList;
