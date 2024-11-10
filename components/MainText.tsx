import { string } from 'prop-types'
import React from 'react'


interface texts{
    text:string
    text2:string
}


const MainText : React.FC<texts>= ({text, text2}) => {
  return (
    <h1  className='text-[245px] leading-[110%] w-full z-50 font-[nohemi] bottom-0 fixed'>{text}<span className='font-[ade]'>{text2}</span></h1>
  )
}

export default MainText