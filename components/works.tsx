
import React from "react";
import WorksTitle from "./works-title-left";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import WorksTitleRight from "./works-title-right";
gsap.registerPlugin(ScrollTrigger);
const Works = () => {
  useEffect(() => {
    // Array to loop through sections and set x-translate values
    const sections = [
      { className: ".section1", x: "0%" },
      { className: ".section2", x: "95.5%" },
      { className: ".section3", x: "0%" },
      { className: ".section4", x: "95.5%" },
      { className: ".section5", x: "0%" },
      { className: ".section6", x: "95.5%" },
      { className: ".section7", x: "0%" },
    ];

    // Create animations for each section
    sections.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.className,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          markers: true, // Show markers only for specific sections
        },
      });

      // Animate section movement
      tl.to(section.className, { ease: "none", x: section.x });
      // tl.to(".theline2", { height: `${(index + 1) * 30}vh`, ease: "none" });
    });
    

   
  }, []);

  return (
    <div className="works-container w-full h-[350vh] bg-black  relative">
      <div className="overflow-hidden h-[0] theline2 w-full flex justify-center">
        <div className="h-full w-[2px] bg-white "></div>

      </div>

    

      <div className="absolute z-10 top-0 flex flex-col   ">

      
        <div className="section1  mb-[-100px] h-[60vh]  translate-x-[-200%]">
          <WorksTitle
            text1="Website"
            text2="ProveIT"
            photo="/images/Wall-Poster-Mockup.jpg"
          ></WorksTitle>
        </div>

        <div>
          <div className="section2 mb-[-100px] translate-x-[200%]">
            <WorksTitleRight
              text1="3D PROJECT"
              text2="ART MADE"
              photo="/images/image 231.png"
            ></WorksTitleRight>
          </div>
        </div>

        <div className="section3 mb-[-100px] translate-x-[-200%]">
          <WorksTitle
            text1="Movie"
            text2="Outdoor"
            photo="/images/Wall-Poster-Mockup.jpg"
          ></WorksTitle>
        </div>

        <div>
          <div className="section4 mb-[-100px] translate-x-[200%]">
            <WorksTitleRight
              text1="Website"
              text2="Designer"
              photo="/images/image 231.png"
            ></WorksTitleRight>
          </div>
        </div>

        <div className="section5 mb-[-100px] translate-x-[-200%]">
          <WorksTitle
            text1="Graphic"
            text2="Project"
            photo="/images/Wall-Poster-Mockup.jpg"
          ></WorksTitle>
        </div>

        <div className="section6 mb-[-100px] translate-x-[200%]">
          <WorksTitleRight
            text1="Website"
            text2="Designer"
            photo="/images/image 231.png"
          ></WorksTitleRight>
        </div>

        <div className="section7 w-[49vw] h-[50vh] mt-[20vh] flex translate-x-[-200%]">
          <div className="items-center leading-none  text-[200px]">
            ALL WORKS
          </div>
        </div>
        <div className="ml-[1vw]">TEXT PROVING ITS CLEAN</div>
        <div className="flex items-center">
          <span className="w-full bg-slate-50 h-[2px] "></span>{" "}
          <span className="text-[19px]">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default Works;
