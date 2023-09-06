import React from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = React.forwardRef(({ handleSearch, placeholder, buttonText }, ref) => {
  return (
    <>
      <input
        ref={ref}
        className='flex h-10 w-[280px] md:w-3/4 rounded-3xl shadow-xl dark:bg-stone-800 border-2 dark:border-neutral-600 dark:text-brand-beige border-neutral-400 bg-transparent px-3 py-2 text-sm dark:placeholder:text-gray-200 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
        type='text'
        placeholder={placeholder}
        value={ref?.current || ""} // Use the ref's current value, or an empty string if it's null
        // onChange={handleSearch}
      />

      <button
        onClick={handleSearch}
        className='bg-brand-red hover:bg-opacity-80 font-semibold rounded-full h-10 text-white ml-2 px-2 py-1'>
        {buttonText}
      </button>
    </>
  );
});
SearchBar.displayName = "SearchBar"; // Set the displayName
export default SearchBar;