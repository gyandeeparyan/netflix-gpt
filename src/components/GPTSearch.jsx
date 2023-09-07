import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

import {  useSelector } from "react-redux";


const GPTSearch = () => {
  // const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const movieResults = useSelector((store) => store?.gpt?.movieResults);
 

  return (
    <>
      <div>
        <div>
          <GPTSearchBar />
        </div>

        {!movieResults && (
          <div className='h-screen md:hidden'>
            <p className=' border-[2px] rounded-full ml-[90px] mt-[300px] absolute border-brand-yellow p-1 px-4 text-s text-brand-yellow '>
              Welcome to GPT Mode
            </p>
            <p className='  rounded-full ml-[72px] mt-[350px] absolute p-1 px-4 text-s text-brand-yellow '>
              Ask me anything ,I am a smart movie suggestion model
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
