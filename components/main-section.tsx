import React from 'react'
import MainText from './MainText'
import BackgroundImage from './backgroundImage'
import Navbar from './navbar'
import Footer from './footer'
import { useEffect } from 'react'
import gsap from 'gsap'

const MainSection = () => {
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".check", // When the ".box" enters the viewport
        start: "bottom bottom", // animation starts when the top of the box reaches the bottom of the viewport
        end: "top top", // ends when the top of the box reaches the top of the viewport
        scrub: true, // makes the animation smooth and tied to the scroll position
      },
      scale:0.8,

      // x: vw(37),
      // y: 1050, // moves the box horizontally
    });






      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".check", // When the ".box" enters the viewport
          start: "bottom bottom", // animation starts when the top of the box reaches the bottom of the viewport
          end: "top top", // ends when the top of the box reaches the top of the viewport
          scrub: true, // makes the animation smooth and tied to the scroll position
        },
  
        // x: vw(37),
        y: "140vh", // moves the box horizontally
        filter:"blur(500px)"
        
      });
  
  

  }, []);






  return (
    <div  className='relative w-full  h-[100vh]'>
    <div
    className="fixed
z-[1000]"
  >
    <Navbar />
  </div>

  <div className="w-20  h-20 check  absolute bottom-0"></div>

  <div className="top-[80vh]   fixed">
    <MainText text="EXPLORE." text2="(STUDIO)" />

    <Footer />
  </div>

  <div className=" justify-center  absolute w-full">
    <BackgroundImage />
  </div></div>
  )
}

export default MainSection