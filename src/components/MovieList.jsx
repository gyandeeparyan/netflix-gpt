/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import {useSelector} from "react-redux";
const MovieList = ({ title, movies }) => {
  const loading =useSelector((store)=>store?.movies?.loading)
  return (
    loading? null :
    <>
    
      <div className='p-6 z-40'>
        <h1 className='md:text-3xl text-2xl font-bold py-6'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-none scrollbar-hide'>
          <div className='flex  '>
            {movies?.map((movie) => (
              <MovieCard key={movie?.id} id={movie?.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default MovieList;
