import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

import {  useSelector } from "react-redux";
import { BrowseShimmer, DesktopBrowseShimmer } from "./Shimmer";


const GPTSearch = () => {
  // const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const movieResults = useSelector((store) => store?.gpt?.movieResults);
  const loading = useSelector((store) => store?.gpt?.loading);

  return (
    <>
      <div>
        <div>
          <GPTSearchBar />
        </div>

        {!movieResults && (
          <div className='h-screen md:hidden'>
            <p className=' border-[2px] rounded-md ml-[90px] mt-[300px] absolute border-brand-yellow p-1 px-4 text-s text-brand-yellow '>
              Welcome to GPT Mode
            </p>
            <p className='  rounded-full ml-[78px] mt-[350px]  absolute w-[240px] p-1 px-4 text-s text-brand-yellow '>
              Ask me anything ,I am a smart movie suggestion model
            </p>
          </div>
        )}
     
        <div className="md:block hidden">
        {loading? <DesktopBrowseShimmer/> :<GPTMovieSuggestions />}  
   
        </div>
  <div className="md:hidden">
  {loading? <BrowseShimmer/> :<GPTMovieSuggestions />}  
   
  </div>

       </div>
    </>
  );
};

export default GPTSearch;
