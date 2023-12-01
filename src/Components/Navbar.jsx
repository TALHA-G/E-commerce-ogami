import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [cat, setCat] = useState(false);
  const [find, setFind] = useState(false);

  var navlinks = [
    { lable: "HOME", href: "/" },
    { lable: "SHOP", href: "/shop" },
    { lable: "BLOG", href: "/blog" },
    { lable: "PAGES", href: "/pages" },
    { lable: "ABOUT US", href: "/about" }
  ]
  return (
    <>
      <div>
        <nav className='max-w-4xl ml-32 pl-8 flex items-center justify-around'>
          <div>
            <img className='w-36 p-4' src="Images/logo.png" alt="logo" />
          </div>


          <ul className='flex gap-4'>
            {
              navlinks.map((v, i) => {
                return (
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

      <div className='flex justify-center gap-20 mb-10 max-h-[8vh]'>
        <div className='bg-[#88c76a] hover:cursor-pointer text-[#fff] text-xl font-bold p-4 w-[18vw] flex justify-between'>
          <h2>All Departments</h2>
          <div onClick={() => setNavbar(!navbar)}>
            <i class="fa-solid fa-bars fa-sm"></i>&nbsp;&nbsp;&nbsp;
            <i className={`${navbar ? 'fa-solid fa-caret-up fa-sm':'fa-solid fa-caret-down fa-sm'}`}></i>
          </div>
        </div>

        <div className='flex justify-center hover:cursor-pointer'>
          <h2 className='p-4 w-[14vw] border' onClick={() => setCat(!cat)}>All Categories <span className='pl-16'><i class="fa-solid fa-angle-down fa-sm"></i></span></h2>
          <input className='border text-base p-4 w-[28vw]' onClick={() => setFind(!find)} type="text" placeholder='What do you need' />
          <button className='bg-[#88c76a] text-base text-center text-[#fff] font-bold px-8 py-2 hover:cursor-pointer' type="submit">SEARCH</button>
        </div>
      </div>
        
        <ul className={`${navbar ? 'visible h-[270px] transition-all duration-500 opacity-90 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[18vw] text-base p-4 font-semibold bg-[#fafafa] absolute top-[25.5vh] left-[13vw] text-gray-500`}>
            <li className='px-2 hover:text-[#88c76a]'><Link href={'#'}>Fresh Food</Link></li><hr />
            <li className='px-2 hover:text-[#88c76a]'><Link href={'#'}>Fresh Fruits</Link></li><hr />
            <li className='px-2 hover:text-[#88c76a]'><Link href={'#'}>Vegetables</Link></li><hr />
            <li className='px-2 hover:text-[#88c76a]'><Link href={'#'}>Dries & Nuts</Link></li><hr />
            <li className='px-2 hover:text-[#88c76a]'><Link href={'#'}>Fast Food</Link></li><hr />
            <li className='px-2 hover:text-[#88c76a]'><Link href={'#'}>Drinks</Link></li>
        </ul>

        <ul className={`${cat ? 'visible h-[190px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[14vw] text-base font-semibold text-gray-500 absolute top-[25.5vh] left-[36vw] bg-[#fff]`}>
            <li className='bg-[#b3e29d] text-black px-4'>All Categories</li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Fruits</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Fast Food</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Vegetables</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Organic Drinks</Link></li>
        </ul>

            
        <ul className={`${find ? 'visible h-[300px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[28vw] text-base font-medium text-gray-500 absolute top-[25.5vh] left-[50vw] bg-[#fff]`}>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Anupan Bread</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Fresh Orange</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Bananas</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Apples</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Mustard Australia</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Spinach leaf</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>American Grape</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>India Strawberry</Link></li>
            <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Fortune Cookies</Link></li>
        </ul>
    </>
  )
}

export default Navbar
            
        
        



// const data = [
//   {
//   title: 'bread',
//   items: [
//     {
//     title: 'Apple',
//     price: '12',
//   }]
// },
// {
//   title: 'Oranges',
//   items: [
//     {
//     title: 'Apple',
//     price: '12',
//   }]
// },
// ]

