
import { Puff} from "react-loader-spinner"

export const DesktopBrowseShimmer = () => {
  return (
    <><div className=" hidden md:block -mt-[40px] ml-[536px]">
 <Puff
  height="800"
  width="110"
  radius={1}
  color="#fcba28"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
<br />
   </div></>
  )
}

export const BrowseShimmer = () => {
    return (
      <><div className="  ml-[85px] absolute z-50 -mt-[1010px] ">
       <Puff
  height="100"
  width="80"
  radius={2}
  color="#fcba28"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
        </div></>
    )
  }

  export const DetailsShimmer = () => {
    return (
      <div>Shimmer</div>
    )
  }


  export const HomeShimmer = () => {
    return (
      <>
       <div className="hidden md:block">
    <div className=" hidden md:block h-[95%] border-[1px] absolute z-50  rounded-3xl border-gray-500    top-4 left-4 bg-brand-coal w-[98%]">

    </div>

    <div className=" hidden md:block h-[30%] absolute z-50  rounded-3xl   animate-pulse top-60 left-9 bg-brand-charcoal w-[60%]">

</div>
<div className=" hidden md:block h-[10%] absolute z-50  rounded-xl   animate-pulse top-[450px] left-9 bg-brand-charcoal w-[15%]">

</div>
<div className=" hidden md:block h-[10%] absolute z-50  rounded-xl   animate-pulse top-[450px] left-64 bg-brand-charcoal w-[15%]">

</div>
      </div>

      <div className="md:hidden">
    <div className="  h-[80%] absolute z-50  rounded-xl  border-[1px] border-brand-beige  top-20 left-4 bg-brand-coal w-[90%]">

    </div>

  
<div className="  h-[7%] absolute z-50  rounded-xl   animate-pulse top-[550px] left-12 bg-brand-charcoal w-[30%]">

</div>
<div className="  h-[7%] absolute z-50  rounded-xl   animate-pulse top-[550px] left-56 bg-brand-charcoal w-[30%]">

</div>
      </div>
      </>
     
    )
  }