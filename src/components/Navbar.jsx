import { Home } from "lucide-react";
import { LOGO ,MOBILE_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between absolute z-50">
    <Link to={"/"}>
        <img
          className='w-44 hidden md:block md:mx-0'
          src={LOGO}
          alt='netflix-logo'
        />
         <img
          className=' w-[50px] md:hidden mt-5 ml-2 '
          src={MOBILE_LOGO}
          alt='netflix-logo'
        />
      </Link>

    
    </div>
     
    </>
  );
};

export default Navbar;
