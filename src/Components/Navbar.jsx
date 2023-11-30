import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    var navlinks =[
        {lable:"HOME",href:"/"},
        {lable:"SHOP",href:"/shop"},
        {lable:"BLOG",href:"/blog"},
        {lable:"PAGES",href:"/pages"},
        {lable:"ABOUT US",href:"/about"}
    ]
  return (
    <div className='bg-[#]'>
        <nav className='max-w-4xl ml-32 pl-8 flex items-center justify-around'>
          <div>
          <img className='w-36 p-4' src="Images/logo.png" alt="logo" />
          </div>
          

            <ul className='flex gap-4'>
               {
                navlinks.map((v,i)=>{
                  return(
                    <>
                    <div>
                    <li><Link className='py-1 px-6  text-xl text-lime-500 font-semibold' href={v.href}>{v.lable}</Link></li>
                    </div>

                    </>

                  )
                })
               }
            </ul>
        </nav>

    </div>
  )
}

export default Navbar