import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";
import { setLoading } from "../utils/gptSlice";
import { Search } from "lucide-react";
const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store?.config?.lang);
  const searchText = useRef("");
  const [GPTMovies, setGPTMovies] = useState(null);

  const searchMovies = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
     
      return json.results ;
      
    } catch (error) {
      console.log(error);
    }
    
  };

  async function search(searchInput) {
    try {
      dispatch(setLoading(true))
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchInput }],
        model: "gpt-3.5-turbo",
      });

      console.log(gptResults.choices);
      if (!gptResults.choices) {
        // Error Handling
      }
      console.log(gptResults?.choices?.[0]?.message?.content);

      // Update the state after receiving the data
      setGPTMovies(gptResults?.choices?.[0]?.message?.content.split(","));

      const moviesArray = gptResults?.choices?.[0]?.message?.content.split(",");

      const promiseArray = await moviesArray.map((movie) =>
        searchMovies(movie)
      );
      const results = await Promise.all(promiseArray);
      console.log(results);
      dispatch(
        addGPTMovieResult({ movieNames: moviesArray, movieResults: results })
      );

       dispatch(setLoading(false))
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = () => {
    
    const inputValue = searchText?.current?.value?.trim();
    if (inputValue) {
      // Create the search query based on user input
      const searchQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        inputValue +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      // Call the search function with the query
      search(searchQuery);
    }

    
  };

 

  return (
    <>
      <div className='flex md:justify-around w-full  ml-[70px] -mt-10 md:mt-10 left-0 right-0 fixed mb-9 items-center  z-50  md:w-1/3  md:mx-auto '>
      <input
        ref={searchText}
        className='flex h-10 w-[280px] md:w-3/4 rounded-3xl shadow-xl dark:bg-stone-800   dark:text-brand-beige  bg-transparent px-3 py-2 text-sm dark:placeholder:text-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
        type='text'
        placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        
        // onChange={handleSearch}
      />

      <button
        onClick={handleSearch}
        className='bg-brand-red hover:bg-opacity-80 font-semibold rounded-full h-10 text-white ml-2 px-2 py-1'>
        {<Search/>}
      </button>
      </div>
    </>
  );
};

export default GPTSearchBar;
