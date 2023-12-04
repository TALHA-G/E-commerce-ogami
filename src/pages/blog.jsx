import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const blog = () => {
  const [def, setDef] = useState(false);
  const [item, setItem] = useState(false);
  
  
  const cards = [
  
     
  
  ]
  
    return (
      <>
      <div className='w-[100%] h-[150vh]'>
  
      <div className='flex justify-start px-52 gap-2 items-center text-base text-gray-400 font-medium'>
        <i class="fa-solid fa-house-chimney"></i>
        <h2>Home</h2>
        <i class="fa-solid fa-angle-right fa-sm pt-1"></i>
        <h2 className='active'>Blog</h2>
      </div>
  
      <div className='flex justify-evenly items-center gap-12 px-52 py-2'>
          <div className='w-[20vw] h-[150vh]'>
            <h2 className='text-2xl font-bold text-black'>Categories <span className='line'></span><hr /></h2>
            <div className='text-lg p-2 text-gray-500 leading-[2.5rem] h-[40vh]'>
              <ul>
                <li className='active'>All Departments</li>
                <li>Healthy</li>
                <li>Nutrition Meal</li>
                <li>Organic Planting</li>
                <li>Recipes</li>
              </ul>
            </div>
  
            <h2 className='text-2xl font-bold text-black font-sans'>Recent posts<span className='line'></span><hr /></h2>
            <div className='text-lg p-2 text-gray-500 leading-[2.5rem] h-[40vh] flex gap-8'>
              
            </div>
  
            <h2 className='text-2xl font-bold text-black font-sans'>Popular tags<span className='line'></span><hr /></h2>
            <div className='text-lg px-2 py-4 leading-[2.5rem] h-[40vh] flex gap-8'>
              <div className='flex flex-col gap-4 w-20'>
               <span className='bg-gray-300 tag p-2 text-center'>All tags</span>
               <span className='bg-gray-300 tag p-2 text-center'>Fresh</span>
               <span className='bg-gray-300 tag p-2 text-center'>Food</span>
               <span className='bg-gray-300 tag p-2 text-center'>Meat</span>
              </div>
  
              <div className='flex flex-col gap-4 w-32'>
               <span className='bg-gray-300 tag p-2 text-center'>Fresh Fruits</span>
               <span className='bg-gray-300 tag p-2 text-center'>Vegetables</span>
              </div>
               
  
            </div>
          </div>
           
           <div className='w-[60vw] h-[150vh]'>
  
                  <div>
                   <h2 className='text-2xl font-bold text-black'>Blog Lists </h2>
                   <span className='line'></span>
                  </div> <hr />
              
               
                
              <div className='grid grid-cols-3 gap-4 px-2 py-4'>
               {
                 cards.map((v,i)=>{
                   return(
                    v.items.map((items,i)=>{
                      return(
                        <>
                      <div className='border max-h-[40vh] leading-normal flex justify-center items-center px-4 py-6 hover'>
                       <img className='w-[160px] h-[140px]' src={items.img} alt="img" />
                       <span className='p-3 text-[#88c74a]'>{v.title}</span>
                       <h2 className='text-xl p-1'>{items.head}</h2>
                       <span className='text-xl'>{items.pri}</span>
                      </div>
                     </>
                      )
                    })
                     
                   )
                 })
               }
              </div>
  
        
           </div>
      </div>
         
       
       {/* <ul className={`${def ? 'visible h-[190px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[12vw] text-base font-semibold text-gray-500 absolute top-[41.50vh] right-[34.80vw] bg-[#fff]`}>
          <li className='bg-[#b3e29d] text-black px-4'><Link href={'#'}>Default</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>A to Z</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Z to A</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>High to Low price</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Low to High price</Link></li>
       </ul>
  
       <ul className={`${item ? 'visible h-[150px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[8vw] text-base font-semibold text-gray-500 absolute top-[41.50vh] right-[26.35vw] bg-[#fff]`}>
          <li className='bg-[#b3e29d] text-black px-4'><Link href={'#'}>Show 5</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 10</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 15</Link></li>
          <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 20</Link></li>
       </ul> */}
      </div>
         
          
      </>
  
    )
}

export default blog