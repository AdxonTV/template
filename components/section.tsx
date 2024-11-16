"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;

    // Create the ScrollTrigger
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
      onUpdate: (self) => {
        // Scaling the pin element based on the progress
        const scale = 1 + self.progress * 10; // Scale from 1 to 3
        gsap.to(pin, { scale });
      },
    });

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[200vh] relative thesectionist bg-yellow-900">
      <div className="thecontainer flex bg-slate-600 h-[100vh] justify-center items-center">
        <div ref={pinRef} className="thepin w-[10vw] bg-red-600 h-[10vh]"></div>
      </div>
    </div>
  );
};

export default Section;
