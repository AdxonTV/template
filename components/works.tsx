import React from "react";
import WorksTitle from "./works-title-left";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import WorksTitleRight from "./works-title-right";
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    // Handle animations with GSAP and ScrollTrigger
    const mm = gsap.matchMedia(); // For responsive breakpoints

    mm.add("(min-width: 992px)", () => {
      // Animations for larger screens (desktop)
      const sections = [
        { className: ".section1", x: "0%" },
        { className: ".section2", x: "95.5%" },
        { className: ".section3", x: "0%" },
        { className: ".section4", x: "95.5%" },
        { className: ".section5", x: "0%" },
        { className: ".section6", x: "95.5%" },
        { className: ".section7", x: "0%" },
      ];

      sections.forEach((section) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.className,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });

        // Move each section
        tl.to(section.className, { ease: "none", x: section.x });
      });

      // Animations for the line progression
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

        // Animate the line height dynamically
        tl.to(".theline2", { height: `${(index + 1) * 50}vh`, ease: "none" });
      });
    });

    // Clean up matchMedia on component unmount
    return () => mm.revert();
  }, []);

  return (
    <div className="works-container w-full h-[390vh] bg-black relative">
      <div className="overflow-hidden h-[10vh] theline2 w-full flex justify-center">
        <div className="h-full w-[2px] bg-white"></div>
      </div>

      <div className="absolute z-10 top-0 flex flex-col">
        {/* Render work sections with animations */}
        <div className="work-1">
          <div className="section1 w-[49vw] h-[45vh] mt-[20vh] flex translate-x-[-200%]">
            <div className="items-center leading-none text-[10vw]">ALL WORKS</div>
          </div>
          <div className="ml-[1vw] text-[0.7vw]">TEXT PROVING ITS CLEAN</div>
        </div>

        {/* Work items */}
        <div className="work-2 h-fit w-fit">
          <div className="section2 mb-[-70px] translate-x-[200%]">
            <WorksTitleRight
              text1="3D PROJECT"
              text2="Antiques"
              photo="/images/image 231.png"
            />
          </div>
        </div>
        <div className="work-3 h-fit w-fit">
          <div className="section3 mb-[-70px] translate-x-[-200%]">
            <WorksTitle
              text1="Movie"
              text2="Outdoor"
              photo="/images/Wall-Poster-Mockup.jpg"
            />
          </div>
        </div>
      

        {/* Continue rendering all other work items */}
        {/* Adjust sections 4 to 7 similarly */}
      </div>
    </div>
  );
};

export default Works;
