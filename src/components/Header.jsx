import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
const navigate =useNavigate()
const user =useSelector(store=>store.user)

  const handleSignOut=( )=>{
   
    signOut(auth).then(() => {
    // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      navigate('/error')
      console.log(error);
    });
  }
  return (
    <>
      <div className='absolute bg-gradient-to-b w-screen flex justify-between from-black px-8 py-2'>
        <img
          className='w-44 '
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='netflix-logo'
        />
  { user &&  (<div className="flex mt-3">
     <img className="h-10 rounded-md" 
     src={user?.photoURL} alt=""/>
      <button
      onClick={handleSignOut}
      className="px-2 mt-1 h-8 ml-2 py-1 rounded-md bg-brand-red text-white font-semibold ">Logout</button>
     
     </div>)}
      </div>
    </>
  );
};

export default Header;
