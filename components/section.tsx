"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Refresh ScrollTrigger after a short delay for better accuracy
      setTimeout(() => ScrollTrigger.refresh(), 1500);
      const height = window.innerHeight;
      const width = window.innerWidth;
      // Animation for element ".x1" width change

      // PHOTO
      gsap.to(".x1", {
        scrollTrigger: {
          trigger: ".object-container",
          start: "top top",
          end: "+=1500px",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      gsap.to(".x1", {
        scrollTrigger: {
          trigger: ".object-container",
          start: "top bottom",
          end: "+=3000px",
          scrub: true,
        },
        scale: 2.5,
      });
      gsap.to(".x-container", {
        scrollTrigger: {
          trigger: ".object-container",
          start: "top bottom",
          end: "+=3000px",
          scrub: true,
        },
        width: width,
        height: height,
      });
      gsap.to(".text-container", {
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "+=1900px",

          pin: true,
          pinSpacing: false,
        },
      });
      gsap.to(".space-between-words", {
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "+=1000px",
          scrub: true,
        },
        width: 0,
      });

      gsap.to(".theline", {
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "+=2000px",
          scrub: true,
        },
       y:5000
      });

      // TEXTS
    }
  }, []);

  return (
    <div className="w-full h-[235vh] relative  text-[350px] z-[100] bg-black mt-[120vh] overflow-hidden">
      <div className="w-[100vw] bg-slate-500 h-fit flex justify-center ">
      <div className="theline z-[10000] h-[200vh] top-[-350vh]   absolute w-[2px] opacity-50 bg-white"></div></div>
      <div className="text-container absolute z-50 h-[100vh] flex items-center  justify-center overflow-hidden w-[200vw] ml-[-50%]">
        <span className="text1 font-[ade] text-[255px]  pl-[50px]">SHOW</span>
        <div className="space-between-words w-[200vw] bg-slate-50 z-50 h-[0px] opacity-50"></div>
        <span className="text2 font-[nohemi] text-[280px]">WORK</span>
      </div>

      <div className="object-container w-full h-[100vh] flex items-center justify-center absolute overflow-hidden">
        <div className="h-[80vh] x-container w-[90%]  overflow-hidden flex justify-center">
          {/* <Image
            className="x1"
            style={{ filter: "grayscale(90%)" }}
            width={1000}
            height={500}
            alt=""
            src="/images/image 231.png"
          /> */}
          <video
            className="x1"
            // style={{ filter: "grayscale(90%)" }}
            width={1000}
            height={500}
            autoPlay
            loop
            muted
            controls
          >
            <source
              src="/images/6315902_Studio Man Dirt Mud_By_Anthem_Films_Artlist_HD.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section;
