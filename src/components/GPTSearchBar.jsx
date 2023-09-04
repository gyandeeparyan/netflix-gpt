import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GPTSearchBar = () => {

    const selectedLanguage = useSelector((store)=>store?.config?.lang) 
    const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <>
      <div className='flex justify-around w-full mt-28 left-0 right-0 absolute mb-9 items-center space-x-2  md:w-1/3 ml-1 md:mx-auto '>
        <input
          className='flex h-10 w-3/4 rounded-3xl shadow-xl dark:bg-stone-800 border-2 dark:border-neutral-600 dark:text-brand-beige border-neutral-400 bg-transparent px-3 py-2 text-sm dark:placeholder:text-brand-beige placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
          type='text'
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}

        />

     <button className="bg-brand-red hover:bg-opacity-80 font-semibold rounded-3xl text-white px-4 py-1">
        {
            lang[selectedLanguage].search
        }
     </button>
     </div>
    </>
  );
};

export default GPTSearchBar;
