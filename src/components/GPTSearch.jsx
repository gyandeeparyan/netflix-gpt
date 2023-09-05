import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTsearchBar";

import { useDispatch, useSelector } from "react-redux";
import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";

import { Languages } from "lucide-react";
import { toggleGPTSearch } from "../utils/gptSlice";

const GPTSearch = () => {
  // const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <GPTSearchBar />
        <img src={BG_URL} className='md:block  h-[680px] md:h-screen w-screen object-cover' />
        <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[45]  w-screen z-50 '>
          <Home className='my-3' />
          <Languages className='my-3' />
          <Rocket
            onClick={() => dispatch(toggleGPTSearch())}
            className='my-3'
          />
          <User2 className='my-3' />
        </div>

        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
