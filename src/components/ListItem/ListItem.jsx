import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({text, url}) => {
  return (
   <div className='w-[100%] text-zinc-700 p-8 h-fit border-b-2 border-zinc-100 bg-zinc-200 hover:text-black hover:bg-zinc-300 transition-all duration-300 font-medium font-nunito '>
        <img src={url} alt="" />
        <span>{text}</span>
   </div>
  )
}

export default ListItem