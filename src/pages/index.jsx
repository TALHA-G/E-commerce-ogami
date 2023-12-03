import React from 'react'
import Link from 'next/link'

const index = () => {

 var cards=[
   {img:'Images/7.png',title:'Bread',head:'Anupan Bread',pri:'$69.00'},
   {img:'Images/12.png',title:'Bread',head:'Fortune Cookies',pri:'$29.00'},
   {img:'Images/8.png',title:'Vegetables',head:'Spinach leaf',pri:'$5.99'},
   {img:'Images/9.png',title:'Vegetables',head:'Bananas',pri:'$15.00'},
   {img:'Images/4.png',title:'Fruits',head:'India Strawberry',pri:'$17.00'},
   {img:'Images/11.png',title:'Fruits',head:'Fresh Orange',pri:'$6.99'},
     {img:'Images/6.png',title:'Fruits',head:'American Grape',pri:'$15.00'},
     {img:'Images/13.png',title:'Fruits',head:'Grouped product',pri:'$26.00'},
 ]

  return (
     <>
      <div className='bg flex justify-center gap-8 items-center'>
       <div className='leading-normal'>
        <span className='text-xl text-[#88c74a]'>Butter & Eggs</span>
        <h2 className='text-[58px] text-black font-bold'>Spice 100% Organic</h2>
        <h3 className='text-3xl font-bold text-[#88c74a] mt-2'>$16.00 <span className='text-lg text-black'>/package</span></h3>
        <button className='bg-[#88c74a] rounded-[25px] px-9 py-2 mt-10 text-[#fff] text-lg'>Shop now</button>
       </div>
       <div>
        <img src="Images/1.png" alt="" />
       </div>
    </div>
        

    <div className='flex justify-center relative top-[-70px]'>
      <div className='w-[80%] flex justify-around items-center bg-[#fff] p-8 z-50 shadow-lg shadow-[#c5c4c4]'>
        <div className='text-center'>
          <i class="fa-solid fa-truck-fast text-2xl text-[#88c74a]"></i>
          <h2 className='text-xl text-black'>FREE SHIPPING</h2>
          <p>For all order over 99$</p>
        </div>
        <div className='text-center'>
          <i class="fa-regular fa-clock fa-flip-horizontal text-2xl text-[#88c74a]"></i>
          <h2 className='text-xl text-black'>DELIVERY ON TIME</h2>
          <p>If good have prolems</p>
        </div>
        <div className='text-center'>
          <i class="fa-solid fa-money-check text-2xl text-[#88c74a]"></i>
          <h2 className='text-xl text-black'>SECURE PAYMENT</h2>
          <p>100% secure payment</p>
        </div>
      </div>
    </div>


    <div className='flex justify-center gap-5 items-centers m-10'>
      <div className='border-2 border-[#88c74a] text-center px-20 py-14'>
        <img className='hover:animate-bounce w-[110px] mb-6' src="Images/2.png" alt="" />
        <h2 className='text-2xl font-bold'>Fresh fruits</h2>
        <span className='text-[#88c74a]'>12 items</span>
      </div>

      <div className='border-2 border-[#88c74a] text-center px-20 py-14'>
        <img className='hover:animate-bounce w-[150px] mb-6' src="Images/3.png" alt="" />
        <h2 className='text-2xl font-bold'>Dried</h2>
        <span className='text-[#88c74a]'>8 items</span>
      </div>

      <div className='border-2 border-[#88c74a] text-center px-20 py-14'>
        <img className='hover:animate-bounce w-[180px] mb-10' src="Images/14.png" alt="" />
          <h2 className='text-2xl font-bold'>Vegetables</h2>
        <span className='text-[#88c74a]'>2 items</span>
      </div>

      <div className='border-2 border-[#88c74a] text-center px-20 py-14 leading-normal'>
        <img className='hover:animate-bounce w-[120px] mb-6' src="Images/5.png" alt="" />
          <h2 className='text-2xl font-bold'>Jucies</h2>
        <span className='text-[#88c74a]'>10 items</span>
      </div>
    </div>
        
        

        <div>
          <h2 className='text-5xl text-black text-center font-bold'>Deal of the week</h2>
          
          <ul className='flex justify-center gap-7 items-center text-xl font-semibold text-black p-8'>
            <li>All</li>
            <li>Bread</li>
            <li>Fast Foods</li>
            <li>Fresh Meat</li>
            <li>Ocean Foods</li>
            <li>Oranges</li>
          </ul> <hr />
        </div>

       <div className='grid grid-cols-4 gap-8 py-6 px-48'>
        {
          cards.map((v,i)=>{
            return(
              <>
               <div className='border max-h-[40vh] leading-normal flex flex-col justify-center items-center px-4 py-6 hover'>
                <img className='w-[160px] h-[140px]' src={v.img} alt="img" />
                <span className='p-3 text-[#88c74a]'>{v.title}</span>
                <h2 className='text-xl p-1'>{v.head}</h2>
                <span className='text-xl'>{v.pri}</span>
               </div>
              </>
            )
          })
        }
       </div>

       <div className='flex my-16'>
        <div className='pic pic1'>
          <img className='w-[20vw]' src="Images/13.png" alt="" />
          <button className='btn bg-[#88c74a] hidden rounded-[25px] px-9 py-2 mt-[5.5rem] text-[#fff] text-lg' >Shop now</button>
        </div>

        <div className='pic pic2 '>
          <img className='w-[20vw]' src="Images/14.png" alt="" />
          <button className='btn bg-[#88c74a] hidden rounded-[25px] px-9 py-2 mt-10 text-[#fff] text-lg' >Shop now</button>
        </div>

        <div className='pic pic3'>
          <img className='w-[16vw]' src="Images/15.png" alt="" />
          <button className='btn bg-[#88c74a] hidden rounded-[25px] px-9 py-2 mt-12 text-[#fff] text-lg' >Shop now</button>
        </div>
       </div>

      <div className='py-16'>
        <h2 className='text-5xl text-black text-center font-bold mb-20'>Day of the week</h2>
        <div className='flex justify-center px-20 gap-6 items-center'>

            
          <div className='flex flex-col gap-16'>
            <div className='flex justify-center items-center gap-2'>
              <div className='text-lg flex flex-col justify-end items-end'>
                 <h2 className='font-bold pr-4'>Eat Healthier</h2>
                 <p className='text-[#777676]'>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>

              <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal1.png" alt="" /></div>
            </div>

            <div className='flex justify-center items-center gap-2'>
               <div className='text-lg flex flex-col justify-end items-end'>
                 <h2 className='font-bold pr-4'>We Have Brands</h2>
                 <p className='text-[#777676]'>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>

              <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal0.png" alt="" /></div>
            </div>
          </div>

             

          <div>
            <img src="Images/img.png" alt="" />
          </div>

          <div className='flex flex-col gap-16'>
            <div className='flex justify-center items-center gap-5'>
              <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal.png" alt="" /></div>

              <div className='text-lg'>
                 <h2 className='font-bold'>Fresh And Clean Products</h2>
                 <p className='text-[#777676]'>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>
            </div>

            <div className='flex justify-center items-center gap-5'>
              <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal2.png" alt="" /></div>

               <div className='text-lg'>
                 <h2 className='font-bold'>Modern Process</h2>
                 <p className='text-[#777676]'>Modi tempora incidunt ut labore dolore magnam aliquam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       

      <div className='flex justify-center items-center gap-3 p-10'>
        <div className='border-2 rounded-[10px] py-1 px-2 text-center'>
          <h2 className='text-3xl font-bold text-[#88c76a]'>01</h2>
          <span className='text-lg text-gray-400'>days</span>
        </div>
        <div className='border-2 rounded-[10px] py-1 px-2 text-center'>
          <h2 className='text-3xl font-bold text-[#88c76a]'>02</h2>
          <span className='text-lg text-gray-400'>hrs</span>
        </div>
        <div className='border-2 rounded-[10px] py-1 px-2 text-center'>
          <h2 className='text-3xl font-bold text-[#88c76a]'>08</h2>
          <span className='text-lg text-gray-400'>mins</span>
        </div>
        <div className='border-2 rounded-[10px] py-1 px-2 text-center'>
          <h2 className='text-3xl font-bold text-[#88c76a]'>36</h2>
          <span className='text-lg text-gray-400'>secs</span>
        </div>
      </div>
       
       <div className='flex justify-center my-8'>
          <div className='bg-gray-200 flex justify-around items-center w-[80%] p-10'>
             <img src="Images\lg.png" alt="" />
             <img src="Images\lg0.png" alt="" />
             <img src="Images\lg1.png" alt="" />
             <img src="Images\lg.png" alt="" />
             <img src="Images\lg0.png" alt="" />
             <img src="Images\lg1.png" alt="" />
          </div>
       </div>
             
        
     </>
  )
}

export default index
      
    
 
