import { useSelector } from "react-redux";

import MovieList from './MovieList';
const GPTMovieSuggestions = () => {
const {movieResults,movieNames} =useSelector((store)=>store?.gpt)

if(!movieNames) return null



  return <>
    
  <div className=" p-4 -mt-[600px]">


<div className=" text-white">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
  </div>
 
  </>;
};

export default GPTMovieSuggestions;
