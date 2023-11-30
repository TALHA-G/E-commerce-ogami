import React from 'react'
import Navbar from '@/Components/Navbar'
import Topbar from '@/Components/Topbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
