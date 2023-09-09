import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleGPTSearch } from "../utils/gptSlice";
import { Link } from "react-router-dom";
const Footer = () => {
  const dispatch = useDispatch();
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <>
      <div className='md:hidden flex justify-around bg-brand-coal text-white fixed  bottom-[80px] mb-6 h-[52px] w-screen z-50 '>
        <Link to={"/"}>
          <Home className='my-3'  />
        </Link>
        {showGPT ? (
                  <Rocket
                    color='yellow'
                    className='my-3'
                    fill='yellow'
                  />
                ) : (
                  <Rocket className=' my-3' onClick={()=>dispatch(toggleGPTSearch())} />
                )}
      
        <Link to={"/user"}>
          <User2 className='my-3 active:bg-white' />
        </Link>
      </div>
    </>
  );
};

export default Footer;
