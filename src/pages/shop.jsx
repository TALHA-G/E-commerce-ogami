import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const shop = () => {

  const [def, setDef] = useState(false);
  const [item, setItem] = useState(false);
  const [shop, setShop] = useState(false);
  const [click, setClick] = useState(null);
 
  const showCards = (index) => {
    setClick(index);
  };
 
  const card =[
    { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
    { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },
    { img: 'Images/9.png', title: 'Fruits', head: 'Bananas', pri: '$15.00' },
    { img: 'Images/4.png', title: 'Fruits', head: 'India Strawberry', pri: '$17.00' },
    { img: 'Images/11.png', title: 'Fruits', head: 'Fresh Orange', pri: '$6.99' },
    { img: 'Images/6.png', title: 'Fruits', head: 'American Grape', pri: '$15.00' },
    { img: 'Images/13.png', title: 'Fruits', head: 'Grouped product', pri: '$26.00' },
    { img: 'Images/8.png', title: 'Vegetables', head: 'Spinach leaf', pri: '$5.99' },
]

const popcards = [
  {
    title: 'Eggs',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Breads',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Meat',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Pizza',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Fries',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Sweet',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Milk',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Cheese',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Chicken',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Pasta',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Burger',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'Sandwich',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
  {
    title: 'IceCream',
    items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

    ]
  },
]

  const cards = [
   
    {
      title: 'All Departments',
      items: [
      { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
      { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },
      { img: 'Images/9.png', title: 'Fruits', head: 'Bananas', pri: '$15.00' },
      { img: 'Images/4.png', title: 'Fruits', head: 'India Strawberry', pri: '$17.00' },
      { img: 'Images/11.png', title: 'Fruits', head: 'Fresh Orange', pri: '$6.99' },
      { img: 'Images/6.png', title: 'Fruits', head: 'American Grape', pri: '$15.00' },
      { img: 'Images/13.png', title: 'Fruits', head: 'Grouped product', pri: '$26.00' },
      { img: 'Images/8.png', title: 'Vegetables', head: 'Spinach leaf', pri: '$5.99' },
    ]
  },
     
    {
      title: 'Fresh Food',
      items: [
        { img: 'Images/7.png', title: 'Bread', head: 'Anupan Bread', pri: '$69.00' },
        { img: 'Images/12.png', title: 'Bread', head: 'Fortune Cookies', pri: '$29.00' },

      ]
    },

    {
      title: 'Fresh Fruit',
      items: [
        { img: 'Images/9.png', title: 'Fruits', head: 'Bananas', pri: '$15.00' },
        { img: 'Images/4.png', title: 'Fruits', head: 'India Strawberry', pri: '$17.00' },
        { img: 'Images/11.png', title: 'Fruits', head: 'Fresh Orange', pri: '$6.99' },
        { img: 'Images/6.png', title: 'Fruits', head: 'American Grape', pri: '$15.00' },
        { img: 'Images/13.png', title: 'Fruits', head: 'Grouped product', pri: '$26.00' },
      ]
    },

    {
      title: 'Vegetables',
      items: [
        { img: 'Images/8.png', title: 'Vegetables', head: 'Spinach leaf', pri: '$5.99' },
      ]
    },

    {
      title: 'Cold Drink',
      items: [
        { img: 'Images/8.png', title: 'Vegetables', head: 'Spinach leaf', pri: '$5.99' },
      ]
    },


  ]

  return(
    <>
    <div className='w-[100%] relative top-[-8rem]'>

         <div className='flex justify-start items-center gap-2 px-52 py-2 text-lg text-gray-400 font-medium bg-[#2b2323]'>
           <i class="fa-solid fa-house-chimney"></i>
           <h2>Home</h2>
           <i class="fa-solid fa-angle-right fa-sm pt-1"></i>
           <h2 className='active'>Shop</h2>
         </div>

         <div className='shop p-10 h-[85vh] flex justify-center'>
           <div className='flex flex-col justify-center items-center gap-8'>
             <img className='animate__animated animate__fadeInUp animate__delay-1s' src="Images/Welcome.png" alt="welcome" />
             <Link href={'#shop'}>
               <button onClick={() => setShop(!shop)} className='animate__animated animate__flash animate__delay-2s rounded-3xl bg-[#f79823] px-8 py-2 text-base font-semibold'> Shop now</button>
             </Link>
           </div>
         </div>
         <div className='py-6 bg-[#2b2323]'></div>
     </div>

     {shop &&(
       <div id='shop' className='w-[100%] h-[155vh] pt-12'>

       <div className='flex justify-evenly items-center gap-12 px-52 py-2'>

         <div className='w-[20vw] h-[150vh]'>
             <h2 className='text-2xl font-bold text-black'>Departments <span className='line'></span><hr /></h2>

             <div className='text-lg p-2 text-gray-500 leading-[2.5rem] h-[40vh]'>
              
                 {
                  cards.map((v, index) => {
                   return (
                       <>
                         <ul>
                           <li className={`${click === index ?'active':''}`} onClick={() => showCards(index)}>{v.title}</li>
                         </ul>
                       </>
                   )
                 })}
             </div>
                        
             <h2 className='text-2xl font-bold text-black font-sans'>Popular Items<span className='line'></span><hr /></h2>
             <div className='text-lg p-2 text-gray-500 leading-[2.5rem] h-[40vh] border-4'>
                  {
                  popcards.map((v, index) => {
                   return (
                       <>
                         <ul className='flex flex-col flex-col-wrap max-h-[35vh]'>
                           <li className={`${click === index ?'active':''}`} onClick={() => showCards(index)}>{v.title}</li>
                         </ul>
                       </>
                   )
                 })}
              
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

             <div className='flex justify-between items-center'>
               <div>
                 <h2 className='text-2xl font-bold text-black'>Layout Shop </h2>
                 <span className='line'></span>
               </div>

               <div className='flex gap-2 items-center'>
                 <div className='relative'>
                     <h2 className='p-2 w-[12vw] border' onClick={() => setDef(!def)}>All Categories<span className='pl-12'><i class="fa-solid fa-angle-down fa-sm"></i></span></h2>
                     <ul className={`${def ? 'visible h-[190px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[12vw] text-base font-semibold text-gray-500 absolute bg-[#fff]`}>
                         <li className='bg-[#b3e29d] text-black px-4'><Link href={'#'}>Default</Link></li>
                         <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>A to Z</Link></li>
                         <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Z to A</Link></li>
                         <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>High to Low price</Link></li>
                         <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Low to High price</Link></li>
                     </ul>
                  </div>

                  <div>
                     <h2 className='p-2 w-[8vw] border' onClick={() => setItem(!item)}>Show<span className='pl-12'><i class="fa-solid fa-angle-down fa-sm"></i></span></h2>
                     <ul className={`${item ? 'visible h-[150px] transition-all duration-500 opacity-100 border shadow-2xl' : 'invisible h-0 transition-all duration-500 opacity-0'} leading-[2.25rem] w-[8vw] text-base font-semibold text-gray-500 absolute bg-[#fff]`}>
                       <li className='bg-[#b3e29d] text-black px-4'><Link href={'#'}>Show 5</Link></li>
                       <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 10</Link></li>
                       <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 15</Link></li>
                       <li className='hover:text-[#88c76a] hover:bg-slate-100 px-4'><Link href={'#'}>Show 20</Link></li>
                     </ul>
                  </div>
              </div>

               <div className='flex items-center gap-4 text-xl'>
                 <i class='bx bxs-grid-alt hov'></i>
                 <i class="fa-solid fa-list-ul hov"></i>
               </div>

         </div><hr />


         <div className='mt-4'>
              <div className={`${click ? 'hidden':'grid grid-cols-3 gap-4'}`}>
              {
                card.map((v, i) => {
                  return (
                      <>
                         <div className='border max-h-[40vh] leading-normal flex flex-col justify-center items-center px-4 py-6 hover'>
                          <img className='w-[160px] h-[140px]' src={v.img} alt="img" />
                          <span className='p-3 text-[#88c74a]'>{v.title}</span>
                          <h2 className='text-xl p-1'>{v.head}</h2>
                          <span className='text-xl'>{v.pri}</span>
                        </div>
                      </>
                                         

                  )
                })}
              </div>
               

               {
                 cards.map ((v, index) => {
                   return (
                     <>
                       <div className='grid grid-cols-3 gap-4'>
                         {
                           v.items.map((items, i) => {
                             return (
                               <>

                                 {click === index &&(
                                   <div className='border max-h-[40vh] leading-normal flex flex-col justify-center items-center px-4 py-6 hover'>
                                     <img className='w-[160px] h-[140px]' src={items.img} alt="img" />
                                     <span className='p-3 text-[#88c74a]'>{items.title}</span>
                                     <h2 className='text-xl p-1'>{items.head}</h2>
                                     <span className='text-xl'>{items.pri}</span>
                                   </div>
                                  )
                                 }
                               </>
                             )
                           })
                         }
                       </div>
                     </>
                   )
                 })
               }

               {
                 popcards.map ((v, index) => {
                   return (
                     <>
                       <div className='grid grid-cols-3 gap-4'>
                         {
                           v.items.map((items, i) => {
                             return (
                               <>

                                 {click === index &&(
                                   <div className='border max-h-[40vh] leading-normal flex flex-col justify-center items-center px-4 py-6 hover'>
                                     <img className='w-[160px] h-[140px]' src={items.img} alt="img" />
                                     <span className='p-3 text-[#88c74a]'>{items.title}</span>
                                     <h2 className='text-xl p-1'>{items.head}</h2>
                                     <span className='text-xl'>{items.pri}</span>
                                   </div>
                                  )
                                 }
                               </>
                             )
                           })
                         }
                       </div>
                     </>
                   )
                 })
               }
            </div>
        </div>
    </div>
  </div>

 )}
</>
   
 )
}

export default shop


    



          

    
   
      






