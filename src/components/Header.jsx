import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

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
      <div className='absolute bg-gradient-to-b w-screen  flex justify-between from-black px-8 py-2 z-10'>
        <img className='w-44 ' src={LOGO} alt='netflix-logo' />
        {user && (
          <div className='flex mt-3'>
            {showGPT && (
              <select
                onChange={handleLanguage}
                name=''
                className='bg-brand-green mr-2 font-semibold text-white h-10 px-4 rounded-lg'>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang?.identifier} value={lang?.identifier}>
                    {" "}
                    {lang?.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGPTSearch}
              className='px-2 mt-1 mr-2 h-8 ml-2 py-1 rounded-md  hover:bg-opacity-80 bg-brand-purple text-white font-semibold '>
              {showGPT ? "Normal Mode" : "GPT Mode"}
            </button>
            <img className='h-10 rounded-md' src={user?.photoURL} alt='' />
            <button
              onClick={handleSignOut}
              className='px-2 mt-1 h-8 ml-2 py-1 rounded-md  hover:bg-opacity-80 bg-brand-red text-white font-semibold '>
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
