import React from "react";
import WorksTitle from "./works-title-left";
import gsap from "gsap";
import { useEffect } from "react";

import WorksTitleRight from "./works-title-right";

const Works=()=> {
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
        },
      });

      // Animate section movement
      tl.to(section.className, { ease: "none", x: section.x });
    
    });

    const linehi = [
      { className: ".work-1" },
      { className: ".work-2" },
      { className: ".work-3" },
      { className: ".work-4" },
      { className: ".work-5" },
      { className: ".work-6" },
      { className: ".work-7" },
    ];

    linehi.forEach((line, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line.className,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate section movement
      tl.to(".theline2", {
        height: `${(index + 1) * 50}vh`, // Corrected string template syntax
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="works-container w-full h-[390vh] bg-black  relative">
      <div className="overflow-hidden h-[10vh] theline2 w-full flex justify-center">
        <div className="h-full w-[2px] bg-white "></div>
      </div>

      <div className="absolute z-10 top-0 flex flex-col   ">
        <div>
          <div className="work-1">
            <div className="section1  w-[49vw] h-[45vh] mt-[20vh] flex translate-x-[-100%]">
              <div className="items-center  leading-none  text-[10vw] ">
                ALL WORKS
              </div>
            </div>
          </div>
          <div className="ml-[1vw] text-[0.7vw]">TEXT PROVING ITS CLEAN</div>
          <div className="flex items-center  mb-[-70px]"></div>
        </div>

        <div className="work-2 h-[45vh] w-fit">
          <div className="section2 mb-[-70px] translate-x-[200%]">
            <WorksTitleRight
              text1="PRODUCT"
              text2="KEYBOARD NO/KEY"
              photo="/images/wokey-factory-6Gg5WxPhpVY-unsplash.jpg"
            ></WorksTitleRight>
          </div>
        </div>
        <div className="work-3 h-fit w-fit ">
          <div className="section3 mb-[-70px] translate-x-[-100%]">
            <WorksTitle
              text1="Movie"
              text2="CHINIESE"
              photo="/images/philip-ho-vM2lRi7VMRk-unsplash.jpg"
            ></WorksTitle>
          </div>
        </div>

        <div className="work-4 h-fit w-fit ">
          <div className="section4 mb-[-70px] translate-x-[200%]">
            <WorksTitleRight
              text1="Website"
              text2="COFFEE BRANGING"
              photo="/images/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg"
            ></WorksTitleRight>
          </div>
        </div>
        <div className="work-5 h-fit w-fit ">
          <div className="section5 mb-[-70px] translate-x-[-200%]">
            <WorksTitle
              text1="Graphic"
              text2="YEEZY"
              photo="/images/bruno-cervera-YpOZ8XepzYU-unsplash.jpg"
            ></WorksTitle>
          </div>
        </div>
        <div className="work-6 h-fit w-fit ">
          <div className="section6 mb-[-70px] translate-x-[200%]">
            <WorksTitleRight
              text1="Website"
              text2="Designer Clothes"
              photo="/images/venti-views-n7AG4GtbhiM-unsplash.jpg"
            ></WorksTitleRight>
          </div>
        </div>

        <div className="work-7 h-fit w-fit ">
          <div className="section7 mb-[-70px] translate-x-[-200%]">
            <WorksTitle
              text1="Graphic"
              text2="Project"
              photo="/images/Wall-Poster-Mockup.jpg"
            ></WorksTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
