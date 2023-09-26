
import { Puff} from "react-loader-spinner"

export const DesktopBrowseShimmer = () => {
  return (
    <><div className=" hidden md:block ml-[600px]">
 <Puff
  height="800"
  width="80"
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
      <><div className=" md:hidden ml-[162px] ">
       <Puff
  height="800"
  width="80"
  radius={1}
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

