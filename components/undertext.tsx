import React from 'react'

interface texts {
    text1:string
    text2:string
}
const Undertext : React.FC<texts> = ({text1, text2}) => {
  return (
    <div className='w-full flex justify-between'>
        <span>{text1}</span>
        <span>{text2}</span>
    </div>
  )
}

export default Undertext