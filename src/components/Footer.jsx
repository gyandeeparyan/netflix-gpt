import { User2 } from "lucide-react";
import { Home } from "lucide-react";
import { Rocket } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleGPTSearch } from "../utils/gptSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Footer = () => {
  const dispatch = useDispatch();
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const [height,setHeight]=useState()

   //function to calculate the height of device
   const calculate_device_height = () => {
    if (window.innerHeight > window.innerWidth) {
      setHeight(window.innerHeight)
      console.log(window.innerHeight);
    } else {
      setHeight(window.innerWidth)
    }
  }

  useEffect(()=>{
calculate_device_height()
  },[])

  return (
    <>
      <div className={ `md:hidden flex justify-around bg-brand-coal text-white fixed  bottom-[0px]  h-[52px] w-screen z-50 `}>
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
                  <Link to='/browse'>
                      <Rocket className=' my-3' onClick={()=>dispatch(toggleGPTSearch())} />
                  </Link>
                
                )}
      
        <Link to={"/user"}>
          <User2 className='my-3 active:bg-white' />
        </Link>
      </div>
    </>
  );
};

export default Footer;
