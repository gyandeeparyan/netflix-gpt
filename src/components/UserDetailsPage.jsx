import Footer from "./Footer"
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const UserDetailsPage = () => {
  const user = useSelector((store) => store.user);
  const navigate =useNavigate()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };
  return (
    <>
   <>
 
 <section className='mb-[200px] mt-12 mx-5 flex items-center justify-center'>
   <div className='mx-auto max-w-7xl px-2 lg:px-0'>
     <div className='mx-auto  max-w-3xl md:text-center'>
     <h2 className='text-3xl font-bold leading-tight  text-black dark:text-brand-beige sm:text-4xl lg:text-5xl lg:leading-tight'>
        NAMASTE , {user?.displayName.toUpperCase()}
       </h2>
       <h2 className='text-3xl font-bold leading-tight text-black dark:text-brand-beige sm:text-4xl lg:text-5xl lg:leading-tight'>
         YOU ARE , WHAT YOU WATCH
       </h2>
     
       <p className='mx-auto p-4 rounded-lg mt-4 max-w-2xl text-left border-2 border-brand-red text-xl text-red-400'>
         The Netflix-GPT App is a groundbreaking entertainment and
         recommendation platform that leverages the power of artificial
         intelligence and natural language processing to enhance the Netflix
         streaming experience. This innovative application seamlessly
         integrates the capabilities of GPT-3.5, offering users a
         personalized, engaging, and interactive way to explore and enjoy
         their favorite shows and movies on Netflix.
         <button
            onClick={handleSignOut}
           
            className=' block mt-4  mx-auto md:hidden text-xs  rounded-full px-4 py-2 hover:bg-opacity-80 bg-brand-red text-white  '>
            Logout
          </button>
       </p>
       
     </div>

     <div className='mt-8 md:ml-[150px] grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12'></div>
     <div className='mt-8 text-center md:mt-16'>
       <a
         href='https://gyandeeparyan-dev.netlify.app/#projects'
         target='_blank'>
         <button
           type='button'
           className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
           MORE PROJECTS
         </button>
         

        
       </a>
     </div>
   </div>
    
 </section>

          

 <Footer/>
</>
   
    </>
  )
}

export default UserDetailsPage