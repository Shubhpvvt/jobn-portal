import React from 'react'

const Login = () => {
  return (
    <div className='w-screen px-30 py-24 gap-14 flex justify-center items-center h-screen bg-white'>


        <div className='w-1/3  flex flex-col justify-start items-center bg-white h-full'>
        <div className='flex justify-center items-center'>
          <div className='w-7 h-7'><img src="../../public/img/logo/Sign-Up/Group.svg" alt="" /></div>
           <h1 className='text-2xl text-[#FF321F] font-bold italic '>CTRMExpertPlatform</h1>
        </div>

          <h2 className='text-lg font-semibold '>Welcome Back!</h2>


          <div className='flex h-18  w-full  flex-col gap-2 ' >
             <label htmlFor="usernama">Emai</label>
             <input className='outline-0 px-2 w-full h-full  border rounded-sm border-gray-400 ' placeholder='your.email@example.com' type="text" id='username' name='usernama' />
          </div>

<div className='flex h-18  w-full  flex-col gap-2 ' >
             <label htmlFor="usernama">Emai</label>
             <input className='outline-0 px-2 w-full h-full  border rounded-sm border-gray-400 ' placeholder='your.email@example.com' type="text" id='username' name='usernama' />
          </div>

<div className='text-xs text-right w-full'>
 Forgot password?
</div>


 <button className='w-full h-8 text-white rounded-sm bg-[#FF321F]'>
  Sign In
 </button>

<div className='flex w-full justify-between items-center gap-3'><hr  className=' w-full' />OR<hr  className=' w-full' /></div>


<div className='w-full h-8 flex  border rounded-sm border-gray-500 justify-center items-center'>
<div className='w-6 h-4'><img src="../../public/img/logo/Sign-Up/git.svg" alt="" /></div>
<li className=' list-none ' >Continue with LinkedIn</li>
</div>

<div className='w-full h-8 flex  border rounded-sm border-gray-500 justify-center items-center'>
<div className='w-6 h-4'><img src="../../public/img/logo/Sign-Up/Chrome.svg" alt="" /></div>
<li className=' list-none ' >Continue with LinkedIn</li>
</div>




<div className='text-sm'>Don't have an account? <span className='text-[#FF321F]'>Sign Up</span></div>








        </div>





  <div className='w-1/2  rounded-2xl bg-[#FFF1F0] flex flex-col justify-center items-center  h-full'>



<div className='w-full px-7 '>
  <img src="../../public/img/login.png"  alt="" />
</div>


<div className='text-center'>
 <h3 className='font-bold py-3 text-lx'>Connect. Grow. Succeed.</h3>
 <h4 className='text-xs w-70'>Your gateway to the CTRM/ETRM professional community.</h4>
</div>












          
        </div>












    </div>
  )
}

export default Login