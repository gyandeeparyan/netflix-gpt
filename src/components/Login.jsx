import { useRef, useState } from "react";
import { validateData, validateName } from "../utils/validate";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { BG_URL, SIGN_UP_IMG, USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { InfinitySpin } from "react-loader-spinner";
const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  const name = useRef(null);
  const email = useRef('test@netflix.com');
  const password = useRef('123456789');
  const [loading, setLoading] = useState(false);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    setLoading(true);

    if (isSignIn) {
      const errorMessage = validateData(
        email.current.value,
        password.current.value
      );
      setError(errorMessage);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          //GOTO BROWSE PAGE
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      const nameError = name.current ? validateName(name.current.value) : null;
      const emailError = validateData(
        email.current.value,
        password.current.value
      );
      setError(nameError || emailError);

      //create account -signup code  here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,

            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              //Dispatch addUser  again
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,

                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
              console.log(error);
            });

          console.log(user);

          // ...
          //GOTO BROWSE PAGE
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
          // ..
        });
      setLoading(false);
    }
  };

  return (
    <>
      <div className='absolute'>
      
      <Header />
       
       </div>
       <div className="md:flex absolute z-50  md:mt-24">
       <div className="w-[35%] hidden md:block ">
        <img fetchpriority="high" src={SIGN_UP_IMG}  className="max-w-sm my-9 ml-44 h-auto " alt='header-image' />

        </div>
        <div className="md:w-1/2 md:h-full md:px-4   ">
        <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='mx-auto  md:mx-4  md:rounded-xl text-white bg-black md:opacity-90  p-12 w-100  md:h-[85%] md:w-[40%] ' >
        <div className='container flex items-center justify-center h-screen md:h-[95%]'>
          <div className='flex flex-col items-start w-full md:w-screen '>
            <p className='text-white font-semibold text-3xl mb-6'>
              {isSignIn ? "Sign In" : "Sign Up"}
            </p>
            {isSignIn ? null : (
              <input
                ref={name}
                type='text'
                className='px-4 py-3 mb-4 w-full bg-neutral-800 focus:bg-neutral-800 rounded-md'
                placeholder='Name'
              />
            )}
            <input
              ref={email}
              defaultValue={"test@netflix.com"}
              type='text'
              className='px-4 py-3 mb-4 w-full bg-neutral-800 focus:bg-neutral-800 rounded-md'
              placeholder='test@netflix.com'
            />
            <input
              ref={password}
              type='password'
              defaultValue={'123456789'}
              className='px-4 py-3 w-full bg-neutral-800 focus:bg-neutral-800 rounded-md'
              placeholder='123456789'
            />

            <p className='text-red-500 font-semibold mt-2 text-lg'>{error}</p>

            <button
              onClick={loading ? null : handleValidation}
              className={`px-4 py-2 mt-8 rounded-md mb-2 bg-brand-red text-white font-semibold w-full ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}>
              {loading ?<><p className="ml-20"><InfinitySpin color="white" width='60'/></p></>  : isSignIn ? "Sign In" : "Sign up"}
            </button>

            <p
              className='text-neutral-400 md: mt-7 cursor-pointer'
              onClick={toggleSignIn}>
              {isSignIn ? "New to Netflix?" : "Already registered"}{" "}
              <span className='text-white'>
                {isSignIn ? "Sign Up now" : ""}{" "}
              </span>
            </p>

            <p className='text-neutral-400 text-xs'>
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.
            </p>
          </div>
        </div>
      </form>
        </div>
       </div>
      
     
    </>
  );
};

export default Login;
