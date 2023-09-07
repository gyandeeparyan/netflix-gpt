
import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";


import { useDispatch } from "react-redux";
import { toggleGPTSearch } from "../utils/gptSlice";
import { Link } from "react-router-dom";
const Footer = () => {

    const dispatch=useDispatch()

  return (
    <>
    <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[90px]  h-[62px] w-screen z-50 '>
    <Link to={'/'}>
            <Home className='my-3' />
            </Link>
            
            
            <Rocket
              onClick={() => dispatch(toggleGPTSearch())}
              className='my-3'
            />
            <Link to={'/user'}>
            <User2 className='my-3 active:bg-white' />
            </Link>
            
          </div>
    </>
  )
}

export default Footer