
import React from 'react'


interface texts{
    text:string
    text2:string
}


const MainText : React.FC<texts>= ({text, text2}) => {
  return (
    <div className=''>
    <h1  className='  text-[10.8vw] leading-[15vh] text-center w-full z-50 font-[nohemi] '>{text}<span className='font-[ade]'>{text2}</span></h1>
    </div>
  )
}

export default MainText