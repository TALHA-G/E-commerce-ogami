import React from 'react'
import Navbar from '@/Components/Navbar'
import Topbar from '@/Components/Topbar'
import Footer from './Footer'
import Arrow from './Arrow'

const Layout = ({children}) => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Arrow/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
