import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='flex justify-evenly items-center leading-[40px] p-4'>
        <div className='text center'>
           <img className='w-36 p-4 mb-6' src="Images/logo.png" alt="logo" />
           <p className='text-md text-gray-500 font-bold'>Address: 60-49 Road 11378 New York</p>
           <p className='text-md text-gray-500 font-bold'>Phone: +65 11.188.888</p>
           <p className='text-md text-gray-500 font-bold'>Email: info.deercreative@gmail.com</p>
           <div >
                 <ul className='flex gap-5 p-4'>
                    <i class="fa-brands fa-facebook-f text-xl border bg-gray-300 rounded-[50%] py-2 px-4"></i>
                    <i class="fa-brands fa-twitter text-xl border bg-gray-300 rounded-[50%] py-2 px-3"></i>
                    <i class="fa-brands fa-linkedin fa-shake text-xl border bg-gray-300 rounded-[50%] py-2 px-4"></i>
                    <i class="fa-brands fa-pinterest-p text-xl border bg-gray-300 rounded-[50%] py-2 px-4"></i>
                 </ul>
              </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>Information</h2>
            <Link href={'#'}><h3 className='text-lg text-gray-500 hover:text-[#88c76a] font-bold'>About us</h3></Link>
            <Link href={'#'}><h3 className='text-lg  text-gray-500 hover:text-[#88c76a] font-bold'>Check out</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a]  text-gray-500 font-bold'>Contact</h3></Link>
            <Link href={'#'}><h3 className='text-gray-500 text-lg hover:text-[#88c76a] font-bold'>Services</h3></Link>
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>My Account</h2>
            <Link href={'#'}><h3 className='text-gray-500 text-lg hover:text-[#88c76a] font-bold'>My account</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>Contact</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>Shop Cart</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>Tracking Order</h3></Link>
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>Quick Shop</h2>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>About us</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>Check out</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>Contact</h3></Link>
            <Link href={'#'}><h3 className='text-lg hover:text-[#88c76a] font-bold text-gray-500'>Services</h3></Link>
        </div>
    </div>

    <div className='flex justify-evenly py-14 mt-3 bg-[#73bd52]'>
        <div className='text-[#fffbfb] flex flex-col gap-2'>
            <h2 className='text-2xl'>Join Our Newsletter Now</h2>
            <p className='text-md'>Get E-mail updates about our latest shop and special offers.</p>
        </div>
        <div className='w-[35vw] h-[8vh] flex justify-between'>
         <input type="email" placeholder="Enter your email" className='w-[100%] text-md font-medium rounded-[30px] px-8 placeholder-[#fff] border-hidden bg-[#a5d470]'/>
         <button className='relative left-[-21%] font-semibold rounded-e-[30px] text-[#88c76a] text-lg bg-[#fff] px-5'>Subscribe</button>
        </div>
    </div>
    <div className='flex justify-around p-4'>
        <div>
            <p>Copyright © 2019 Ogami - All Rights Reserved.</p>
        </div>
        <div>
            <img src="Images/payment.png" alt="" />
        </div>

    </div>
        
    </>
  )
}

export default Footer