import { IMG_CDN_URL } from "../utils/constants"

// eslint-disable-next-line react/prop-types
const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className=" w-36 md:w-48  mr-4">

        <img className ="rounded-xl"
        src={IMG_CDN_URL+posterPath} alt="movie poster make it dynamic" />
    </div>
  )
}

export default MovieCard