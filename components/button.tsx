import React from "react";
import Image from "next/image";
interface text {
  text: string;
  image?: string;
}
const Button: React.FC<text> = ({ text, image }) => {
  return (
    <div className="  bg-slate-50 text-black rounded-md px-3 flex  items-center">
        <div className="">
      <div
        className="text-[10px] w-full flex justify-between
        "
      >
        <span>FEEL IT</span>
     <Image
     src={`${image}`}
     width={8}
     height={8}
     alt=""
     ></Image>
      </div>
      {text}</div>
    </div>
  );
};

export default Button;
