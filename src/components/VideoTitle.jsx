import { Play } from "lucide-react";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
// eslint-disable-next-line react/prop-types
const VideoTitle = ({ title, overview }) => {
  const id= useSelector((store)=>store?.movies?.nowPlayingMovies[2]?.id)
  return (
    <>
      <div className='pt-[12%] mt-32 hidden md:block px-6 md:px-20 w-screen aspect-video   absolute bg-gradient-to-r from-black '>
        <h1 className='md:text-6xl text-5xl mb-3 font-semibold hidden md:block text-white '>
          {title}
        </h1>
        <p className='text-lg mb-4 hidden md:inline-block text-white md:w-[50%]'>
          {overview}
        </p>
        <div>
          <div className='mt-8 md:mt-4'>
          <Link to={"/browse/"+id}>
            <button className=' px-4 py-1 md:hover:scale-95  md:px-8 md:py-2 rounded-md text-center mr-4  bg-white hover:bg-gray-200  text-black font-semibold text-xl'>
              <Play fill='black' className='inline mb-1' /> Play
            </button>
            </Link>
            <Link to="/user">
            <button className='px-4 md:hover:scale-95 py-1 md:px-8 md:py-2 rounded-md bg-gray-500 text-white bg-opacity-50 font-semibold text-xl'>
              <Info className='inline mb-1 ' /> Info
            </button>
            </Link>
            
          </div>
        </div>
      </div>

      <div className='md:hidden flex absolute left-[100px] top-[590px]'>
        <div className='flex justify-between'>
        <Link to={"/browse/"+id}>
          <button className='px-4 py-1 md:px-8 md:py-2 rounded-md text-center mr-4 bg-white hover:bg-gray-200 text-black font-semibold text-xl'>
            <Play fill='black' className='inline-flex mb-1' /> Play
          </button>
          </Link>
          <Link to={'/user'}>
          <button className='px-4 py-1 md:px-8 md:py-2 rounded-md bg-gray-600 text-white bg-opacity-70 font-semibold text-xl'>
            <Info className='inline mb-1' /> Info
          </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
