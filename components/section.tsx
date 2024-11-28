"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Section=() => {
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
          end: "+=800vh", // Converted from 2000px
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
  
      // const mm = gsap.matchMedia(); // Initialize matchMedia

      // mm.add("(min-width: 2804px)", () => {
        // Desktop scale animation
        gsap.to(".x1", {
          scrollTrigger: {
            trigger: ".object-container",
            start: "top bottom",
            end: "+=2800vh", // Converted from 2400px
            scrub: true,
          },
          scale: 3,
        });
      // });

      // mm.add("(min-width: 2024px) and (max-width: 28003px)", () => {
      //   // Tablet scale animation
      //   gsap.to(".x1", {
      //     scrollTrigger: {
      //       trigger: ".object-container",
      //       start: "top bottom",
      //       end: "+=1500vh",
      //       scrub: true,
      //     },
      //     scale: 2.5,
      //   });
      // });
    
      // mm.add("(min-width: 768px) and (max-width: 2023px)", () => {
      //   // Tablet scale animation
      //   gsap.to(".x1", {
      //     scrollTrigger: {
      //       trigger: ".object-container",
      //       start: "top bottom",
      //       end: "+=1500vh",
      //       scrub: true,
      //     },
      //     scale: 2.5,
      //   });
      // });
    
      // mm.add("(max-width: 767px)", () => {
      //   // Mobile scale animation
      //   gsap.to(".x1", {
      //     scrollTrigger: {
      //       trigger: ".object-container",
      //       start: "top bottom",
      //       end: "+=1000vh",
      //       scrub: true,
      //     },
      //     scale: 2,
      //   });
      // });
  
  
      gsap.to(".x-container", {
        scrollTrigger: {
          trigger: ".object-container",
          start: "top bottom",
          end: "+=2000vh", // Converted from 3000px
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
          end: "+=800vh", // Converted from 2000px
          pin: true,
          pinSpacing: true,
        },
      });
  
      // Animate the space between words
      gsap.to(".space-between-words", {
        scrollTrigger: {
          trigger: ".text-container",
          start: "top top",
          end: "+=400vh", // Converted from 1000px
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
 
    <div className="w-full h-[300vh] relative overflow-hidden text-[350px] father-container z-[100] bg-black">
        
      <div className="text-[8.4vw] tracking-tighter border-solid leading-[15vw] border-b-2 border-t-2 font-[nohemi] border-white">
        WORKING ON PROJECTS®
      </div> 
    

      <div className="w-[100vw] absolute h-[0] theline flex justify-center">
        <div className="theline z-[10000] h-full w-[2px] bg-white"></div>
      </div>

      <div className="text-container absolute z-50 h-[100vh] flex items-center justify-center overflow-hidden w-[200vw] ml-[-50%]">
        <span className="text1 font-[ade] text-[10vw]  pl-[1.9vw] blur-[0px] hover:blur-[10px] transition">SHOW</span>
        <div className="space-between-words w-[250vw] bg-slate-50 z-50 h-[0px] opacity-50"></div>
        <span className="text2 font-[nohemi]   text-[11vw]  blur-[0px] hover:blur-[10px] transition">WORK</span>
      </div>

      <div className="object-container w-full h-[100vh] flex items-center justify-center absolute overflow-hidden">
        <div className="h-[80vh]  x-container w-[90%] overflow-hidden flex justify-center">
          <video
            className="x1 w-[50vw] opacity-75"
      
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