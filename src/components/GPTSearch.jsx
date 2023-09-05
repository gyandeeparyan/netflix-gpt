import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTsearchBar";

const GPTSearch = () => {
  return (
    <>
      <div>
      <GPTSearchBar/>
      <img
          src={BG_URL}
         
        />
       
        <GPTMovieSuggestions/>
      
        
      </div>
    </>
  );
};

export default GPTSearch;
