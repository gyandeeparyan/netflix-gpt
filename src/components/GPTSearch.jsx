import { BG_URL, GPT_MODE_IMG } from "../utils/constants";
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
          <GPTSearchBar />
        </div>
      <div>
        

        {!movieResults && (
          <>
          <div className='md:max-w-sm max-w-[300px] mx-auto md:my-0 my-60  py-4   h-screen md:absolute  md:left-[500px] md:top-[250px]'>
<img src={GPT_MODE_IMG}  alt="MOVIE IMAGE" />
</div>
          </>
        
          
        )}
     
        <div className="md:block hidden absolute z-50">
        {loading? <DesktopBrowseShimmer/> :<GPTMovieSuggestions />}  
   
        </div>
  <div className="md:hidden absolute z-50">
  {loading? <BrowseShimmer/> :<GPTMovieSuggestions />}  
   
  </div>

       </div>
    </>
  );
};

export default GPTSearch;
