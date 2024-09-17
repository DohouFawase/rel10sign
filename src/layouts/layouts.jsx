import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navigarion/navBar'
import Footer from '../components/navigarion/footer'


export default function Layouts() {
  return (
    <div>
        <NavBar />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <Outlet />
      <Footer />

    </div>
  )
}
