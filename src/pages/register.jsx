import React from 'react'
import Link from 'next/link'

const register = () => {
     
    async function enter(e) {
        // e.preventDefault()
        
        var data = {
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
          password: document.getElementById("confirm password").value
        }
        
        
        
        var res = await fetch('/api/auth/register', {
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
    
    return (
    <>
     <div className='h-[90vh] flex justify-center'>
            <form  action="/api/auth/login" onSubmit={enter} className='border shadow-2xl w-[50vw] h-[85vh] flex flex-col justify-evenly items-center'>

              <div className='text-5xl text-black font-bold text-center p-4'>
                <h2>Register new Account</h2>
              </div>
    
              <div className='flex flex-col justify-center w-[90%] gap-2 text-lg'>
                  <h2 className='p-2'><span className='text-[red]'>*</span> Username</h2>
                  <input className='border-[1.5px] p-3 mx-2' type="text" id="username" placeholder="Username"/>

                  <h2 className='p-2'><span className='text-[red]'>*</span> Password</h2>
                  <input className='border-[1.5px] p-3 mx-2' type="password" id="password" placeholder="Password"/>

                  <h2 className='p-2'><span className='text-[red]'>*</span>Confirm Password</h2>
                  <input className='border-[1.5px] p-3 mx-2' type="password" id="confirm password" placeholder="Password"/>
              </div>
               
                <div className='w-[40vw] text-lg font-semibold text-[#fff]'>
                  <button className=' w-[100%] text-center p-3 m-4 rounded bg-[#88c74a]' type="submit" >REGISTER</button>
                </div>

                <button className='w-[40vw] text-lg text-center font-semibold'><Link href={'/login'}> OR LOGIN</Link></button>

            </form>
        </div>
    </>
  )
}

export default register