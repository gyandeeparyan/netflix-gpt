import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";


const VideoBackground = ({ movieId }) => {
  const trailerData = useSelector((store) => store.movies.trailerVideo);

  useTrailer(movieId);

  return (
    <>
      <div className='w-screen aspect-video'>
        <iframe
          width='100%'
          height='100%'
          src={"https://www.youtube.com/embed/" + trailerData?.key+"?autoplay=1"}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullscreen></iframe>
      </div>
      
    </>
  );
};

export default VideoBackground;
