import React from 'react'

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
      window.location.replace('/dashboard')
    }else{
      alert(res.message)
    }
  }
  
  return(
    <>
    <div>
        <div>
            <form  action="/api/auth/login" onSubmit={enter}>
    
              <div className='border border-red-700 flex justify-center items-center'>
                <input className='border  border-amber-600 p-2 m-2 block' type="text" id="username" placeholder="Username"/>
                <input className='border  border-amber-600 p-2 m-2 ' type="password" id="password" placeholder="Password"/>
              </div>

                <div className='flex justify-center items-center'>
                  <button className='border border-amber-600 text-center p-3 m-4 rounded bg-orange-500' type="submit" >Login</button>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default Login