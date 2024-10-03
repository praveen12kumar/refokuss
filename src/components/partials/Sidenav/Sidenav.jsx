import React from 'react'
import NavComponents from '../../NavComponents/NavComponents'
import { tags, info } from './SidenavContainer'
 

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-200 p-3">
      <h1 className='text-2xl'>
      <i class="ri-tv-fill  text-[#6556CD]"></i> 
      <span className='text-zinc-200 ml-2'>Movie App</span>
      </h1>

      <nav>
        <NavComponents text={"New Feed"} tags={tags} />
        <div className="w-full h-[1px] my-2 bg-zinc-600"></div>
        <NavComponents text={"Website Information"} tags={info} />
      </nav>

    </div>
  )
}

export default Sidenav