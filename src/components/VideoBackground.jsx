import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerData = useSelector((store) => store.movies.trailerVideo);
  const poster_path= useSelector((store)=>store?.movies?.nowPlayingMovies[2]?.poster_path)
 
  useTrailer(movieId);

  return (
    <>
      <div className='w-screen -mt-20 aspect-video hidden md:block'>
        <iframe
          width='100%'
          height='100%'
          src={"https://www.youtube.com/embed/" + trailerData?.key+"?autoplay=1&mute=1"}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullscreen></iframe>
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="md:hidden  ">
      <img className =" w-[90%] border-[1px] border-brand-beige mx-auto rounded-xl"
        src={IMG_CDN_URL+poster_path} alt="movie poster make it dynamic" />
      </div>
      
    </>
  );
};

export default VideoBackground;
