"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useEffect(() => {
    // Check if window object is available to avoid SSR issues
    if (typeof window !== "undefined") {
      // Refresh ScrollTrigger after a short delay to account for all elements being loaded
      setTimeout(() => ScrollTrigger.refresh(), 1500);

      const { innerHeight: height, innerWidth: width } = window;

      // PHOTO animation setup
      gsap.to(".x1", {
        scrollTrigger: {
          trigger: ".object-container",
          start: "top top",
          end: "+=2000px",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      gsap.to(".x1", {
        scrollTrigger: {
          trigger: ".object-container",
          start: "top bottom",
          end: "+=2400px",
          scrub: true,
        },
        scale: 2.8,
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

      // Pinning and animating the text container
      gsap.to(".text-container", {
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "+=2000px",
          pin: true,
          pinSpacing: true,
        },
      });

      // Animate the space between words
      gsap.to(".space-between-words", {
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "+=1000px",
          scrub: true,
        },
        ease: "power4.out",
        width: 0,
      });

      // Animate the vertical line
      gsap.to(".theline", {
        scrollTrigger: {
          trigger: ".x1",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        ease: "power1.in",
        height: "98%",
        opacity: 1,
      });
    }
  }, []);

  return (
    <div className="w-full h-[390vh] relative overflow-hidden text-[350px] z-[100] bg-black">
      <div className="text-[8.4vw] tracking-tighter border-solid leading-[15vw] border-b-2 border-t-2 font-[nohemi] border-white">
        WORKING ON PROJECTS®
      </div>

      <div className="w-[100vw] absolute h-[0] theline flex justify-center">
        <div className="theline z-[10000] h-full w-[2px] bg-white"></div>
      </div>

      <div className="text-container absolute z-50 h-[100vh] flex items-center justify-center overflow-hidden w-[200vw] ml-[-50%]">
        <span className="text1 font-[ade] text-[10vw] pl-[50px]">SHOW</span>
        <div className="space-between-words w-[250vw] bg-slate-50 z-50 h-[0px] opacity-50"></div>
        <span className="text2 font-[nohemi] text-[11vw]">WORK</span>
      </div>

      <div className="object-container w-full h-[100vh] flex items-center justify-center absolute overflow-hidden">
        <div className="h-[80vh] x-container w-[90%] overflow-hidden flex justify-center">
          <video
            className="x1 opacity-75"
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