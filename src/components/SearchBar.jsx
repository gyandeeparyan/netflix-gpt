/* eslint-disable react/prop-types */


const SearchBar = ({ref ,handleSearch ,placeholder,buttonText}) => {
  return (
    <>
    <input
          ref={ref}
          className='flex h-10 w-[280px] md:w-3/4 rounded-3xl shadow-xl dark:bg-stone-800 border-2 dark:border-neutral-600 dark:text-brand-beige border-neutral-400 bg-transparent px-3 py-2 text-sm dark:placeholder:text-brand-beige placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
          type='text'
          placeholder={placeholder}
          //   onChange={handleSearch}
        />

        <button
          onClick={handleSearch}
          className='bg-brand-red hover:bg-opacity-80 font-semibold rounded-full h-10 text-white ml-2 px-2 py-1'>
          {buttonText}
        </button>
    </>
  )
}

export default SearchBar