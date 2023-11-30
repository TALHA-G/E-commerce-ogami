import React from 'react'
import Link from 'next/link'


const Topbar = () => {
  return (
    <>
    <div className='bg-[#e6e3e3] p-3 flex justify-around'>
        <div className='flex gap-6'>
               <div className='text-lg flex gap-2 justify-center items-center'>
                <i className ="fa-solid fa-envelope text-lg "></i>
                info.deercreative@gmail.com</div>
            
               <div className='text-lg flex gap-2 justify-center items-center'>
                 <i class="fa-solid fa-phone text-lg"></i>
                +923075438639</div>
        </div>
           <div className='flex gap-4'>
               <div >
                 <ul className='flex gap-4'>
                    <i class="fa-brands fa-facebook-f text-lg"></i>
                    <i class="fa-brands fa-twitter text-lg"></i>
                    <i class="fa-brands fa-linkedin fa-shake text-lg"></i>
                    <i class="fa-brands fa-pinterest-p text-lg"></i>
                 </ul>
              </div>
               <Link  href="/login">
              <div className='text-sm flex gap-2 pl-12'>
                  <i class="fa-solid fa-user text-lg flex gap-2"></i>
                  <span className='text-lg'>Login</span>
              </div>
               </Link>

                  
           </div>
    </div>



    </>
  )
}

export default Topbar

