import React from "react";
import Image from "next/image";
interface works {
  text1: string;
  text2: string;
  photo: string;
}
const WorksTitle: React.FC<works> = ({ text1, text2, photo }) => {
  return (
<div className=" h-[60vh]">










<div className="w-full min-h-[70vh] max-h-[80vh] overflow-hidden   flex ">



    <div className="w-[51vw] flex items-center relative">

    <div className="w-[40vw]  h-fit overflow-hidden  ">
        <Image
        className="w-full dasphoto"
          src={photo}
          width={4000}
          alt="  "
          height={4000}
        ></Image>
      </div>

      <div className="  font-[nohemi] flex flex-col absolute w-fit   text-end right-0 h-fit z-10  ">
        <span className=" right-0  text-[0.7vw] text-right  py-4   mb-6 "> ({text1})</span>
        <span className=" right-0    text-[3.5vw]  leading-[110%] " >{text2}</span>
        <div className="bg-black w-20 h-full right-0 absolute -z-10"></div>
      </div>


      
    </div>
    {/* <div className="w-[49vw] "></div> */}
    </div>





  {/* <div className="h-full w-[2px] theline1 bg-white absolute top-0 right-[1vw]"></div> */}

    </div>

  );
};

export default WorksTitle;
