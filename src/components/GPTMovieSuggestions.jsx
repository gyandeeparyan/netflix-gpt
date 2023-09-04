import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
const {movieResults,movieNames} =useSelector((store)=>store?.gpt)

if(!movieNames) return null



  return <>
  
  <div className="flex">
  {movieNames.map((movie) => (
    <p key={movieNames} className="bg-neutral-700  text-brand-beige rounded-full px-4 py-2">{movie}</p>
  ))}
</div>
  </>;
};

export default GPTMovieSuggestions;
