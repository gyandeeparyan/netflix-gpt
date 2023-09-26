import { useSelector } from "react-redux";

import MovieList from './MovieList';
const GPTMovieSuggestions = () => {
const {movieResults,movieNames} =useSelector((store)=>store?.gpt)

if(!movieNames) return null



  return <>
    
  <div className=" z-60 p-4 -mt-[0px] md:mt-[100px]">


<div className=" text-white font-bold">
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
