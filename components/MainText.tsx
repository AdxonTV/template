
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useEffect } from 'react'
interface texts{
    text:string
    text2:string
}

gsap.registerPlugin(ScrollTrigger)
const MainText : React.FC<texts>= ({text, text2}) => {
useEffect(()=>{


gsap.to((".endline"),{
  scrollTrigger:{
    trigger:".dekonteiner",
    start:"center top",
    end:"bottom top",
    scrub:true
  },
  x:"-100vw"
})

},[])
  return (
    <div className=''>
      
      <div  className='endline w-[100vw] right-[-100vw] h-[0.4vh] bg-white absolute bottom-[12.5vh]'></div>
    <h1  className='  text-[10.8vw] leading-[15vh] text-center text-white w-full z-50 font-[nohemi] '>{text}<span className='font-[ade]'>{text2}</span></h1>
    </div>
  )
}

export default MainText