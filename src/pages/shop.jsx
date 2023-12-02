import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const shop = () => {

const [def, setDef] = useState(false);
const [item, setItem] = useState(false);
  return (
    <>
    <div className='w-[100%] h-[100vh]'>

    <div className='flex justify-start px-52 gap-2 items-center text-base text-gray-400 font-medium'>
      <i class="fa-solid fa-house-chimney"></i>
      <h2>Home</h2>
      <i class="fa-solid fa-angle-right fa-sm pt-1"></i>
      <h2 className='active'>Shop</h2>
    </div>

    <div className='flex justify-evenly items-center gap-12 px-52 py-2'>
        <div className='w-[20vw] h-[100vh]'>
          <h2 className='text-2xl font-bold text-black'>Departments <span className='line'></span><hr /></h2>
          <div className='text-lg p-2 text-gray-500 leading-[2.5rem] h-[40vh]'>
            <ul>
              <li>All Departments</li>
              <li>Fresh Food</li>
              <li>Fresh Fruits</li>
              <li>Vegetables</li>
              <li>Fresh Meat</li>
              <li>Fast Food</li>
              <li>Cold Drinks</li>
            </ul>
          </div>

          <h2 className='text-2xl font-bold text-black font-sans'>Popular Items<span className='line'></span><hr /></h2>
          <div className='text-lg p-2 text-gray-500 leading-[2.5rem] h-[40vh]'>
            <ul>
              <li>Eggs</li>
              <li>Breads</li>
              <li>Milk</li>
              <li>Meat</li>
              <li>Chicken</li>
              <li>Cheese</li>
            </ul>
          </div>
        </div>
         
         <div className='w-[60vw] h-[100vh]'>

            <div className='flex justify-between items-center'>
                <div>
                 <h2 className='text-2xl font-bold text-black'>Layout Shop </h2>
                 <span className='line'></span>
                </div>
  
                <div className='flex gap-2 items-center'>
                  <h2 className='p-2 w-[12vw] border' onClick={() => setDef(!def)}>All Categories<span className='pl-12'><i class="fa-solid fa-angle-down fa-sm"></i></span></h2>
                  <h2 className='p-2 w-[8vw] border' onClick={() => setItem(!item)}>Show<span className='pl-12'><i class="fa-solid fa-angle-down fa-sm"></i></span></h2>
                </div>
        
                <div className='flex items-center gap-4 text-xl'>
                 <i class='bx bxs-grid-alt hov'></i>
                 <i class="fa-solid fa-list-ul hov"></i>
                </div>
            </div><hr />
      

         </div>
            
        
             

    </div>
       
     
     <ul className={`${def ? 'visible h-[190px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[12vw] text-base font-semibold text-gray-500 absolute top-[38vh] right-[33.25vw] bg-[#fff]`}>
        <li className='bg-[#b3e29d] text-black px-4'><Link href={'#'}>Default</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>A to Z</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Z to A</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>High to Low price</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Low to High price</Link></li>
     </ul>

     <ul className={`${item ? 'visible h-[150px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[8vw] text-base font-semibold text-gray-500 absolute top-[38vh] right-[24.80vw] bg-[#fff]`}>
        <li className='bg-[#b3e29d] text-black px-4'><Link href={'#'}>Show 5</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 10</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 15</Link></li>
        <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 20</Link></li>
     </ul>
    </div>
       
        
    </>

  )
}

export default shop
