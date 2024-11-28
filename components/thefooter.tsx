import React, { useState, useEffect,} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Magnetic from './magnetic';
gsap.registerPlugin(ScrollTrigger)
const Thefooter = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Stan do śledzenia aktualnego obrazu
  const imageSources = [
    '/images/Wall-Poster-Mockup.jpg',
    '/images/nigel-hoare-r5c_l6SCRdg-unsplash.jpg',
    '/images/susan-wilkinson-IIc73xHTRTg-unsplash.jpg',
    '/images/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg',
    '/images/philip-ho-vM2lRi7VMRk-unsplash.jpg',
    '/images/bruno-cervera-YpOZ8XepzYU-unsplash.jpg'

  
  ];

  // Funkcja do obsługi zdarzenia scroll
  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      // Przewijanie w dół (zmienia na następny obrazek)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    } else {
      // Przewijanie w górę (zmienia na poprzedni obrazek)
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageSources.length) % imageSources.length);
    }
  };

  useEffect(() => {

    
    // Dodanie event listenera dla scrolla
    window.addEventListener('wheel', handleWheel);

    // Czyszczenie event listenera przy unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(()=>{
    gsap.to(".thephotos",{
        scrollTrigger:{
            trigger:".thephotos",
            scrub:true,
            start:"center center",
            end:"center center"
            
        },
        opacity:100
    })
  },[])
  

  return (
    <div className="scroll-container2 w-[100vw] flex justify-center h-[105vh]">
        <div className=' w-[50vw] mt-[-10vh] flex justify-center items-center'>
      <div className="h-[100vh] flex items-center "> <Magnetic>
        <div className='h-[50vh] overflow-hidden  flex items-center'>
     
        <Image
          src={imageSources[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          width={1000}
          height={1000}
          className='thephotos opacity-0 w-[35vw]'
          style={{ filter: "grayscale(100%)"}}
        /></div></Magnetic>
      </div></div>
    </div>
  );
};

export default Thefooter;
