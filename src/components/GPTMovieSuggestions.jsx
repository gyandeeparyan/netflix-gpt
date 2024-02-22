import { useSelector } from "react-redux";

import MovieList from "./MovieList";
const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store?.gpt);

  if (!movieNames) return   <h1>error on tmdb server</h1>;

  return (
    <>
      <div className=' z-40 p-4 absolute -mt-[0px] md:mt-[150px]'>
        <div className=' text-white font-bold'>
          {movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GPTMovieSuggestions;
