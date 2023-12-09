import React from 'react'

const contact = () => {
  return (
    <>
      <div className='flex justify-start mb-5 px-52 gap-2 items-center text-base text-gray-400 font-medium'>
        <i class="fa-solid fa-house-chimney"></i>
        <h2>Home</h2>
        <i class="fa-solid fa-angle-right fa-sm pt-1"></i>
        <h2 className='active'>Contact Us</h2>
      </div>
      <div className='flex justify-center'>
           <div className='w-[73vw]'>
             <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59587.97626222185!2d105.836964!3d21.022740000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1702109520766!5m2!1svi!2sus" width="100%" height="600" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
             <div className='flex justify-evenly items-center gap-8 p-8'>
                  <div className='flex flex-col justify-center items-center leading-[2.5rem] p-8 text-xl'>
                     <i class="fa-solid fa-location-dot text-4xl text-[#88c74a] mb-8"></i>
                     <p>60-49 Road 11378</p>
                     <span>New York</span>
                  </div>

                  <div className='flex flex-col justify-center items-center leading-[2.5rem] p-8 text-xl'>
                     <i class="fa-regular fa-envelope text-4xl text-[#88c74a] mb-8"></i>
                     <p><span className='text-gray-500'>Phone:</span>&nbsp;0123456789</p>
                     <p><span className='text-gray-500'>Mail:</span>&nbsp;info.deercreative@gmail.com</p>
                  </div>

                  <div className='flex flex-col justify-center items-center leading-[2.5rem] p-8 text-xl'>
                     <i class="fa-regular fa-clock text-4xl text-[#88c74a] mb-8"></i>
                     <p><span className='text-gray-500'>Week Days:</span>&nbsp;10:00 – 22:00</p>
                     <p><span className='text-gray-500'>Sunday:</span>&nbsp;Close</p>
                  </div>
             </div>

            <div className='text-center mb-16'>
                <h2 className='text-4xl text-black font-bold p-4'>Leave Message</h2>
                <p className='text-lg text-gray-500 p-4 mb-4'>Our staff will call back later and answer your questions.</p>
              <div className='flex flex-col gap-6'>
                  <div className='flex justify-between items-center gap-6'>
                     <input className='border p-3 w-[100%] decoration-none' type="text" placeholder='Name'/>
                     <input className='border p-3 w-[100%]' type="email" name="" placeholder='email' />
                  </div>
                  <div>
                     <textarea className='border h-[20vh] p-3 w-[100%]' name="message" cols="30" rows="10" placeholder='Message'></textarea>
                  </div>
                  
                  <div>
                    <button className='border text-lg font-semibold text-center float-left text-[#fff] bg-[#88c74a] rounded-3xl px-6 py-2'>Send Message</button>
                  </div>
              </div>
            </div>

           </div>
      </div>

           
    </>
  )
}

export default contact