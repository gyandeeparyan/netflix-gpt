import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div className='absolute'>
        <Header />
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='header-image'
        />
      </div>

      <form className='absolute mx-auto md:my-[150px] right-0 left-0 rounded-xl text-white bg-black md:opacity-90  p-12 w-100  md:h-[85%] md:w-[32%]'>
        <div className='container flex items-center justify-center h-screen md:h-[95%]'>
          <div className='flex flex-col items-start w-full md:w-screen '>
            <p className='text-white font-semibold text-3xl mb-6'>
              {isSignIn ? "Sign In" : "Sign Up"}
            </p>
            {isSignIn ? null : (
              <input
                type='text'
                className='px-4 py-3 mb-4 w-full bg-neutral-800 focus:bg-neutral-800 rounded-md'
                placeholder='Name'
              />
            )}
            <input
              type='text'
              className='px-4 py-3 mb-4 w-full bg-neutral-800 focus:bg-neutral-800 rounded-md'
              placeholder='Email or phone number'
            />
            <input
              type='password'
              className='px-4 py-3 w-full bg-neutral-800 focus:bg-neutral-800 rounded-md'
              placeholder='Password'
            />
            <button className='px-4 py-2 mt-8 rounded-md mb-2 bg-brand-red text-white font-semibold w-full'>
              {isSignIn ? "Sign In" : "Sign up"}
            </button>

            <p
              className='text-neutral-400 md: mt-7 cursor-pointer'
              onClick={toggleSignIn}
            >
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
    </>
  );
};

export default Login;
