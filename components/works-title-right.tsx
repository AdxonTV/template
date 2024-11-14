import React from 'react'
import Image from 'next/image'
interface works {
    text1: string;
    text2: string;
    photo: string;
  }

const WorksTitleRight :React.FC<works> = ({text1, text2, photo}) => {
  return (
    <div>



        

<div className="w-full   flex">
{/* <div className="w-[49vw] "></div> */}
<div className="w-[51vw] flex items-center   relative">



  <div className="  font-[nohemi] flex flex-col absolute w-[14.5vw]  left-0 h-fit  z-10  ">
    <span className="   text-left  py-4  mb-6">{text1}</span>
    <span className="   text-[84px]   leading-[110%]">{text2}</span>
    <div className="bg-black w-20 h-full left-0 absolute -z-10"></div>
  </div>
  <div className="w-[12vw]"></div>


  <div className="w-[40vw]  bg-amber-500  overflow-hidden">
        <Image
        className="w-full  "
          src={photo}
          width={3000}
          alt="  "
          height={3000}
        ></Image>
      </div>



  
</div>
{/* <div className="h-full w-[2px] bg-white absolute top-0 right-[1vw]"></div> */}
</div>


















    </div>
  )
}

export default WorksTitleRight