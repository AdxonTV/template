"use client"; // Ensure that this code runs only on the client side.
import Section from "@/components/section";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Button from "@/components/button";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundImage from "@/components/backgroundImage";
import MainText from "@/components/MainText";
import Works from "@/components/works";
import Undertext from "@/components/undertext";
// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle loading state
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // Disable scrolling during loading
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling after loading
    }

    setTimeout(() => {
      setIsLoading(false); // Set loading to false once the page is ready
      document.body.style.cursor = "default"; // Reset cursor
    }, 1000); // Adjust the timeout for your needs
  }, [isLoading]);

  // Initialize Lenis and ScrollTrigger after the page is loaded
  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      const lenis = new Lenis({
        // Optional Lenis options
        smooth: true,
        lerp: 0.1,
        mouseMultiplier: 1,
        smoothTouch: false,
      });

      // Ensure ScrollTrigger works with Lenis scroll
      lenis.on("scroll", ScrollTrigger.update); // Make ScrollTrigger update on Lenis scroll

      // Sync GSAP ticker with Lenis
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Disable smoothing in GSAP for smoother interaction with Lenis
      gsap.ticker.lagSmoothing(0);

      // Optional: Setup ScrollTrigger defaults for Lenis
      ScrollTrigger.defaults({
        scroller: scrollRef.current, // Tell ScrollTrigger to use Lenis scroll container
      });
    }
  }, [isLoading]);
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".check", // When the ".box" enters the viewport
        start: "bottom bottom", // animation starts when the top of the box reaches the bottom of the viewport
        end: "top top", // ends when the top of the box reaches the top of the viewport
        scrub: true, // makes the animation smooth and tied to the scroll position
      },

      // x: vw(37),
      y: 1050, // moves the box horizontally
    });
  }, []);

  return (
    <div ref={scrollRef} style={{ height: "900vh", overflow: "hidden" }}>
      <div
        className="fixed
z-[1000]"
      >
        <Navbar />
      </div>

      <div className="w-20  h-20 check  absolute bottom-0"></div>

      <div className="bottom-0 -z-10 fixed">
        <MainText text="EXPLORE." text2="(STUDIO)" />

        <Footer />
      </div>

      <div className=" justify-center relative flex w-full">
        <BackgroundImage />
      </div>
      <Section></Section>
      <Works></Works>
    </div>
  );
}
