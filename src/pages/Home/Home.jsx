import React from 'react'
import Sidenav from '../../components/partials/Sidenav/Sidenav'
import TopNav from '../../components/partials/TopNav/TopNav';


const Home = () => {
    document.title = "Homepage"
  return (
    <>
        <Sidenav/>
        <div className="w-[80%] h-full">
            <TopNav/>
        </div>

    </>
  )
}

export default Home