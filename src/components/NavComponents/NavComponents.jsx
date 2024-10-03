import React from 'react'
import { Link } from 'react-router-dom';

const NavComponents = ({text, tags}) => {
  return (
    <>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>{text}</h1>
        <div className="flex flex-col gap-2">
        {
          tags.map((item, index) => {
            return(
              <Link className='text-zinc-500 flex items-center gap-2 hover:bg-[#6556CD] p-4 rounded-lg hover:text-zinc-100 transition-all duration-200 ease-in' to={`/home/${item.link}`} key={index}>
                <i class={`${item.icon} `}></i>
                <h1 className='text-md mt-1'>{item.name}</h1>
              </Link>
            )
          })
        }
        </div>
    </>
  )
}

export default NavComponents