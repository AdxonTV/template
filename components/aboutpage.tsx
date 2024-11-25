import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);


const Aboutpage = () => {



useEffect(()=>{


  gsap.to(".imagemove",{

    scrollTrigger:{
      trigger:".mark",
      scrub:true,
      start: "top bottom",
      end: "bottom top", // Converted from 2000px
      pin: false,
      pinSpacing: false,

    },
    y:"-5vh"

  } )


  const splitTypes = document.querySelectorAll('.textopacity');

  splitTypes.forEach((char) => {
    if (char instanceof HTMLElement) {
      const text = new SplitType(char, { types: 'chars' });
  
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top bottom',
          end: 'top 40%',
          scrub:true,
      
          markers: true,
        },

        opacity:0.2,
        stagger: 0.1,
      });
    }
  });

  
  // gsap.to(".textopacity",{

  //   scrollTrigger:{
  //     trigger:".mark",
  //     scrub:true,
  //     start: "center bottom",
  //     end: "bottom center", // Converted from 2000px
  //     pin: false,
  //     pinSpacing: false,

  //   },
  //   opacity:"100%"

  // } )
},[])

  return (
    <div  className="h-[100vh] z-[100] decontan relative dekonteiner bg-black">
      <div className="absolute w-2 h-full mark"></div>
      <div className="flex items-center h-full    px-[1vw]">
        <div>
          <div className="flex w-full ">
            <div className="bg-gray-700 overflow-hidden w-[28vw] h-[56vh]">
              {" "}
              <Image
            className="imagemove w-[50vw] translate-y-[-13vh]"
              style={{ filter: "grayscale(50%)"}}
                src={"/images/worker.jpg"}
                width={1000}
                height={1000}
                alt="xxx"
              ></Image>
            </div>

            <div className="  w-full ml-[1.2vw] text-[0.9vw]  flex flex-col">
              <div className="flex w-full  justify-between">
                <div>
                  <div className="font-[600] leading-[110%]">CO-FOUNDER-CREATIVE <br />DIRECTOR</div>
                  <div className="font-[ade]">UNREAL STUDIO</div>
                  <Image
        
              className="w-[17vw] left-[53.5vw] top-[57vh] absolute"
                src={"/images/Vector 12.png"}
                width={1000}
                height={1000}
                alt="xxx"
              ></Image>
                </div>
                <div className="border-t border-white">(Working sinc 2009)</div>
              </div>

              <div className="h-full"></div>

              <span className="text-[3.5vw]  leading-[100%]  w-full">
              &#34;In my 15 years as a designer, OMMO is the key
              </span>
            </div>
          </div>

          <div className="text-[3.5vw] opacity-100    textopacity leading-[100%]">
            development partner who genuinely makes my job easier.Their ability for done
            to consistently deliver allows me to focus on design, knowing the
            development is in reliable hands.&#34;
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Aboutpage;
