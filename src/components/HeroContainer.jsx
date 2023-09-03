import {  useSelector } from "react-redux/es/hooks/useSelector";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const HeroContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[2];
  console.log(mainMovie);

  const {original_title,overview,id }=mainMovie
  return (
    <>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </>
  );
};

export default HeroContainer;
