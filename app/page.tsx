"use client"; // Ensure this is at the top

import Section from "@/components/section";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Aboutpage from "@/components/aboutpage";
import Works from "@/components/works";
import MainSection from "@/components/main-section";
import Thefooter from "@/components/thefooter";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Effect
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(
      ".cursor-outline"
    ) as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Update dot position
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Animate outline position
      gsap.to(cursorOutline, {
        left: `${posX}px`,
        top: `${posY}px`,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".dasphoto");
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;

    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(cursorDot, {
          scale: 20,
          transition: 0.0001,
          ease: "power4.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(cursorDot, { scale: 1, transition: 0.01 });
      });
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // Handle Loading State
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // Disable scrolling during loading
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling after loading
    }

    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false once the page is ready
      document.body.style.cursor = "default"; // Reset cursor
    }, 1000); // Adjust the timeout as needed

    // Cleanup
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Initialize Lenis and ScrollTrigger after the page is loaded
  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      const lenis = new Lenis({
        lerp: 0.05, // Smoothness of scrolling
        touchMultiplier: 1, // Sensitivity for touch scrolling
      });

      // Update ScrollTrigger on Lenis scroll
      lenis.on("scroll", ScrollTrigger.update);

      // Sync GSAP ticker with Lenis
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Disable GSAP's lag smoothing
      gsap.ticker.lagSmoothing(0);

      // Set ScrollTrigger to use Lenis' scroll container
      ScrollTrigger.defaults({
        scroller: scrollRef.current,
      });

      // Refresh ScrollTrigger when all resources are loaded
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  

  // Animate .thanks Element

  // Upewniamy się, że element istnieje przed dodaniem event listenera

  return (

    <div ref={scrollRef} className="no-cursor cursor-none">
      <div className="w-[100vw] top-0 z-[1000000] items-center justify-center h-[100vh] fixed pointer-events-none bg-black flex md:hidden">
        <div className="text-center">
          <div>THE WEBSITE®</div>
          <div className="opacity-40">Made for PC</div>
        </div>
      </div>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <MainSection />
      <Section />
      <Works />
      <Aboutpage />
      <Thefooter></Thefooter>
    </div> 
  );
}
