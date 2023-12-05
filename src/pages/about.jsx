import React from 'react'
import Link from 'next/link'

const about = () => {


  return (
    <>
  <div>

      <div className='flex justify-start px-52 gap-2 items-center text-base text-gray-400 font-medium'>
          <i class="fa-solid fa-house-chimney"></i>
          <h2>Home</h2>
          <i class="fa-solid fa-angle-right fa-sm pt-1"></i>
          <h2 className='active'>About us</h2>
      </div>

      <div className='px-52 py-2 h-[270vh] w-[100%]'>

        <div className='w-[100%] h-auto'>
            <h2 className='text-4xl font-bold text-black'>The Story About Us <span className='line'></span><hr /></h2>
        </div>

      <div className='flex justify-evenly gap-16 py-4'>
          <div className='flex flex-col justify-evenly leading-loose text-lg text-gray-500 font-medium'>
            <p>Tyna Giang's integrated agro-forestry farming model is the first project in Vietnam to achieve the highest ranking in the "100 projects to combat climate change" by the Ministry of Environment, Energy and Sea. France organized in 2016 ...</p>

            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam   aliquam quaerat voluptatem</p>
          </div>
           
          <div className='w-[90vw] relative'>
            <Link href={'https://www.youtube.com/embed/XMcab1MFaLc?si=DtLWGvtz3LCtPFrB'}>
               <div className='w-[100%]'><img src="Images/video.png" alt="logo" /></div>
               <div className='absolute left-[50%] top-[50%] bg-[#fff] rounded-[50%] px-6 py-5 btn'>
                 <i class="fa-solid fa-play fa-xl text-[#88c76a]"></i>
               </div>
            </Link>
          </div>
      </div>
      
        <div className='flex justify-center items-center py-16'>
            <div className='border w-[80vw] flex justify-evenly items-center px-8 py-12 text-xl text-[#222521]'>
                <div className='flex justify-between items-center gap-6'>
                <img src="Images/ic-1.png" alt="img" />
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-5xl font-bold'>100%</h2>
                    <span>Happy Client</span>
                  </div>
                </div>

                <div className='flex justify-between items-center gap-6'>
                <img src="Images/ic-2.png" alt="img" />
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-5xl font-bold'>142</h2>
                    <span>Our Engineers</span>
                  </div>
                </div>

                <div className='flex justify-between items-center gap-6'>
                  <img src="Images/ic-3.png" alt="img" />
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-5xl font-bold'>+16</h2>
                    <span className='pl-8'>Our Farm</span>
                  </div>
                </div>
             </div>
        </div>

        <div className='choose flex justify-center items-center px-16 py-4'>
            <div className='w-[40vw] flex justify-center items-center'>
              <img src="Images/man.png" alt="img" />
            </div>

            <div className='w-[60vw]'>
              <div className='w-[100%] h-auto p-2 mb-6'>
                <h2 className='text-4xl font-bold text-black'>Why choose us<span className='line'></span></h2>
              </div>

              <div className='flex flex-wrap gap-5'>
                  <div className='w-[25vw] flex justify-center items-center gap-5'>
                      <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal1.png" alt="" /></div>
        
                      <div className='text-lg'>
                         <h2 className='font-bold'>Eat Healthier</h2>
                         <p className='text-[#777676]'>There are times when you have to work hard with some great pain</p>
                      </div>
                  </div>

                  <div className='w-[25vw] flex justify-center items-center gap-5'>
                      <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal0.png" alt="" /></div>
        
                      <div className='text-lg'>
                         <h2 className='font-bold'>We Have Brands</h2>
                         <p className='text-[#777676]'>There are times when you have to work hard with some great pain</p>
                      </div>
                  </div>

                  <div className='w-[25vw] flex justify-center items-center gap-5'>
                      <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal.png" alt="" /></div>
        
                      <div className='text-lg'>
                         <h2 className='font-bold'>Fresh And Clean Products</h2>
                         <p className='text-[#777676]'>There are times when you have to work hard with some great pain</p>
                      </div>
                  </div>
              
                  <div className='w-[25vw] flex justify-center items-center gap-5'>
                      <div className='text-center border rounded-[50%] bg-gray-300 p-3'><img src="Images/deal2.png" alt="" /></div>
    
                      <div className='text-lg'>
                         <h2 className='font-bold'>Modern Process</h2>
                         <p className='text-[#777676]'>There are times when you have to work hard with some great pain</p>
                      </div>
                  </div>
              </div>
          </div>
       </div>
        
            <div className='w-[100%] h-[100vh] relative top-[70vh]'>
                <div className='p-2 mb-6 flex justify-center'>
                   <h2 className='text-4xl font-bold text-black'>We are farmers<span className='line'></span></h2>
                </div>

                <div className='flex justify-evenly items-center gap-4'>

                  <div className='far1 far relative overflow-hidden'>
                    <div className='absolute top-[-100%] left-[-100%] bg-[rgba(0,0,0,.6)] font-sans h-[100%] w-[100%] flex flex-col justify-center items-center gap-4 trans'>
                       <h2>Katie Harrison</h2>
                       <span>Barber</span>
                         <ul className='flex gap-4'>
                            <i class="fa-brands fa-facebook-f text-lg"></i>
                            <i class="fa-brands fa-twitter text-lg"></i>
                            <i class="fa-brands fa-linkedin fa-shake text-lg"></i>
                            <i class="fa-brands fa-pinterest-p text-lg"></i>
                         </ul>
                      </div>
                  </div>

                  <div className='far2 far relative overflow-hidden'>
                    <div className='absolute top-[-100%] left-[-100%] bg-[rgba(0,0,0,.6)] font-sans h-[100%] w-[100%] flex flex-col justify-center items-center gap-4 trans'>
                       <h2>Katie perry</h2>
                       <span>Workers Incharge</span>
                         <ul className='flex gap-4'>
                            <i class="fa-brands fa-facebook-f text-lg"></i>
                            <i class="fa-brands fa-twitter text-lg"></i>
                            <i class="fa-brands fa-linkedin fa-shake text-lg"></i>
                            <i class="fa-brands fa-pinterest-p text-lg"></i>
                         </ul>
                      </div>
                  </div>

                  <div className='far3 far relative overflow-hidden'>
                    <div className='absolute top-[-100%] left-[-100%] bg-[rgba(0,0,0,.6)] font-sans h-[100%] w-[100%] flex flex-col justify-center items-center gap-4 trans'>
                       <h2>John Harisson</h2>
                       <span>Security Incharge</span>
                         <ul className='flex gap-4'>
                            <i class="fa-brands fa-facebook-f text-lg"></i>
                            <i class="fa-brands fa-twitter text-lg"></i>
                            <i class="fa-brands fa-linkedin fa-shake text-lg"></i>
                            <i class="fa-brands fa-pinterest-p text-lg"></i>
                         </ul>
                      </div>
                  </div>

                  <div className='far4 far relative overflow-hidden'>
                    <div className='absolute top-[-100%] left-[-100%] bg-[rgba(0,0,0,.6)] font-sans h-[100%] w-[100%] flex flex-col justify-center items-center gap-4 trans'>
                       <h2>Max Rashford</h2>
                       <span>Barber</span>
                         <ul className='flex gap-4'>
                            <i class="fa-brands fa-facebook-f text-lg"></i>
                            <i class="fa-brands fa-twitter text-lg"></i>
                            <i class="fa-brands fa-linkedin fa-shake text-lg"></i>
                            <i class="fa-brands fa-pinterest-p text-lg"></i>
                         </ul>
                      </div>
                  </div>
                   
                      
                   
                   
                 </div>
            </div>

            <div className='flex justify-center my-8 relative top-[40vh]'>
               <div className='bg-gray-200 flex justify-around items-center w-[80%] p-10'>
                  <img src="Images\lg.png" alt="" />
                  <img src="Images\lg0.png" alt="" />
                  <img src="Images\lg1.png" alt="" />
                  <img src="Images\lg.png" alt="" />
                  <img src="Images\lg0.png" alt="" />
                  <img src="Images\lg1.png" alt="" />
               </div>
            </div>
      </div>
  </div>
    </>
  )
}

export default about