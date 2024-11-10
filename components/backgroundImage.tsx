import React from "react";
import Image from "next/image";
const BackgroundImage = () => {
  return (
    <div className="box  -z-50 absolute ">

      <Image
        className=" opacity-30 mt-[-450px]"
        width={1000}
 
        height={500}  style={{ filter: "grayscale(100%)"}}
        layout="responsive"
        alt=""
        src={"/images/Wall-Poster-Mockup.jpg"}
      ></Image>
    </div>
  );
};

export default BackgroundImage;
