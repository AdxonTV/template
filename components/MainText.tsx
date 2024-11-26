
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
    start:"top top",
    end:"bottom center",
    scrub:true
  },
  width:"100vw"
})

},[])
  return (
    <div className=''>
      <div  className='endline w-0 h-[0.4vh] bg-slate-50 absolute bottom-[12.5vh]'></div>
    <h1  className='  text-[10.8vw] leading-[15vh] text-center w-full z-50 font-[nohemi] '>{text}<span className='font-[ade]'>{text2}</span></h1>
    </div>
  )
}

export default MainText