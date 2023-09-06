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
  const movieResults = useSelector((store) => store?.gpt?.movieResults);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <GPTSearchBar />
        </div>

        {!movieResults && (
          <div className='h-screen md:hidden'>
            <p className=' border-[2px] rounded-full ml-[90px] mt-[300px] absolute border-brand-yellow p-2 px-4 text-xl text-brand-yellow '>
              Welcome to GPT Mode
            </p>
          </div>
        )}
        <img
          src={BG_URL}
          className='md:block  hidden  h-[680px] md:h-screen w-screen object-cover'
        />
        {/* <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[45]  w-screen z-50 '>
          <Home className='my-3' />
          <Languages className='my-3' />
          <Rocket
            onClick={() => dispatch(toggleGPTSearch())}
            className='my-3'
          />
          <User2 className='my-3' />
        </div> */}

        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
