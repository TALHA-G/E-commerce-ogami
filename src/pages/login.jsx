import React from 'react'
import Link from 'next/link'

const Login = () => {
  async function enter(e) {
    // e.preventDefault()
    
    var data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    }
    
    
    
    var res = await fetch('/api/auth/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
    
    res = await res.json()
    
    
    if(res.success){
      alert(res.message)
      window.location.replace('/')
    }else{
      alert(res.message)
    }
  }
  
  return(
    <>
       <div className='flex justify-start mb-5 px-52 gap-2 items-center text-base text-gray-400 font-medium'>
        <i class="fa-solid fa-house-chimney"></i>
        <h2>Home</h2>
        <i class="fa-solid fa-angle-right fa-sm pt-1"></i>
        <h2 className='active'>Login</h2>
      </div>

       <div className='h-[90vh] flex justify-center'>
            <form action="/" onSubmit={enter}  className='border shadow-2xl w-[50vw] h-[85vh] flex flex-col justify-evenly items-center'>

              <div className='text-5xl text-black font-bold text-center p-4'>
                <h2>Login</h2>
              </div>
    
              <div className='flex flex-col justify-center w-[90%] gap-2 text-lg'>
                  <h2 className='p-2'><span className='text-[red]'>*</span> Username</h2>
                  <input className='border-[1.5px] p-3 mx-2' type="text" id="username" placeholder="Username"/>

                  <h2 className='p-2'><span className='text-[red]'>*</span> Password</h2>
                  <input className='border-[1.5px] p-3 mx-2' type="password" id="password" placeholder="Password"/>
              </div>
               
               <div className='w-[100%] flex justify-between px-12'>
                  <div className='flex gap-2 text-lg'>
                    <input className='w-4 after:bg-[#88c74a]' type="checkbox" name="" id="" />
                    <h2>Remember me</h2>
                  </div>

                  <div>
                    <span className='text-lg text-[#88c74a]'>Forgot your password</span>
                  </div>
               </div>

               
                <div className='w-[40vw] text-lg font-semibold text-[#fff]'>
                  <button className=' w-[100%] text-center p-3 m-4 rounded bg-[#88c74a]' type="submit" >SIGN IN</button>
                </div>

                <button className='w-[40vw] text-lg text-center font-semibold'><Link href={'/register'}> OR CREATE AN ACCOUNT</Link></button>

            </form>
        </div>
    

    </>
  )
}

export default Login