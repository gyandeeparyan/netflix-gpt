import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;
  if (!id) return null;
  return (
    <div className=' w-36 md:w-48   mr-4'>
      <Link to={"/browse/" + id}>
        <img
          className='rounded-xl md:hover:scale-95'
          src={IMG_CDN_URL + posterPath}
          alt='movie poster make it dynamic'
        />
      </Link>
    </div>
  );
};

export default MovieCard;
