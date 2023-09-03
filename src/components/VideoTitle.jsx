import { Play } from "lucide-react";
import { Info } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const VideoTitle = ({title,overview}) => {
  return <>
<div className="pt-[12%] px-20 w-screen aspect-video mb-4 mt-[90px] absolute bg-gradient-to-r from-black ">
<h1 className="md:text-6xl text-5xl mb-3 font-semibold text-white ">{title}</h1>
<p className="text-lg mb-4 text-white md:w-[50%]">{overview}</p>
<div>
<button className="px-8 py-2 rounded-md text-center mr-4  bg-white hover:bg-gray-200  text-black font-semibold text-xl">
<Play fill="black" className="inline mb-1"/> Play
</button>
<button className="px-4 py-2 rounded-md bg-gray-500 text-white bg-opacity-50 font-semibold text-xl">
    <Info className="inline mb-1 "/> More Info
</button>
</div>
</div>

  </>;
};

export default VideoTitle;
