import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { LOGO, MOBILE_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import SearchBar from "./SearchBar";
import { Search } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    //Toggle Search Button
    dispatch(toggleGPTSearch());
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target?.value));
  };
  return (
    <>
      <div className='absolute hidden md:flex bg-gradient-to-b w-screen flex-col md:flex-row justify-between from-black px-8 py-2 z-10'>
        <img
          className='w-44 hidden md:block md:mx-0'
          src={LOGO}
          alt='netflix-logo'
        />

        {user && (
          <div className='flex mt-3 mx-auto justify-between md:mx-0 '>
            <div>
              {showGPT && (
                <select
                  onChange={handleLanguage}
                  name=''
                  className='bg-brand-green mr-2 font-semibold text-white h-9 px-4  rounded-lg'>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang?.identifier} value={lang?.identifier}>
                      {" "}
                      {lang?.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <button
                onClick={handleGPTSearch}
                className='px-2 mt-1 mr-2 h-8 ml-2 py-1 rounded-md  hover:bg-opacity-80 bg-brand-purple text-white font-semibold '>
                {showGPT ? "Normal Mode" : "GPT Mode"}
              </button>
            </div>

            <div className='flex'>
              <img className='h-10 rounded-md' src={user?.photoURL} alt='' />
              <button
                onClick={handleSignOut}
                className='px-2 mt-1 h-8 ml-2 py-1 rounded-md  hover:bg-opacity-80 bg-brand-red text-white font-semibold '>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

        {/* MOBILE NAV BAR  */}
      <div className='sticky top-0 flex z-50 '>
        <img
          className=' w-[50px] md:hidden mt-5 ml-2 '
          src={MOBILE_LOGO}
          alt='netflix-logo'
        />
        <div className='flex ml-3 md:hidden mt-5'>

          {/* {!showGPT && <SearchBar buttonText={<Search />} />} */}
        </div>
       </div>
    </>
  );
};

export default Header;
