
import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Languages } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleGPTSearch } from "../utils/gptSlice";
const Footer = () => {

    const dispatch=useDispatch()

  return (
    <>
    <div className='md:hidden flex justify-around bg-brand-coal text-white fixed bottom-[90px]  h-[62px] w-screen z-50 '>
            <Home className='my-3' />
            <Languages className='my-3' />
            <Rocket
              onClick={() => dispatch(toggleGPTSearch())}
              className='my-3'
            />
            <User2 className='my-3 active:bg-white' />
          </div>
    </>
  )
}

export default Footer