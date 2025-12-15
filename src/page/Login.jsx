import React from 'react'

const Login = () => {
  return (
    <div className='w-screen px-30 py-20 gap-14 flex justify-center items-center h-screen bg-white'>


        <div className='w-1/3 px-7 py-6 border border-gray-200 rounded-xl  flex flex-col justify-start items-center bg-whitew h-full '>
        <div className='flex justify-center items-center'>
          <div className='w-7 h-7'><img src="../../public/img/logo/Sign-Up/Group.svg" alt="" /></div>
           <h1 className='text-2xlw text-[]   text-[#FF321F] font-bold italic '>CTRMExpertPlatform</h1>
        </div>

          <h2 className='text-lg py-3 font-semibold '>Welcome Back!</h2>

 <div className='flex flex-col w-full gap-2.5'>

          <div className='flex h-[3.7rem]  w-full  flex-col gap-2 ' >
             <label   className='text-xs' htmlFor="usernama">Emai</label>
             <input className='outline-0 px-2 w-full h-full  text-xs border-2 rounded-sm border-gray-300 ' placeholder='your.email@example.com' type="text" id='username' name='usernama' />
          </div>

 <div className='flex h-[3.7rem]  w-full  flex-col gap-2 ' >
             <label   className='text-xs' htmlFor="usernama">Password</label>
             <input className='outline-0 px-2 w-full h-full  text-xs border-2 rounded-sm border-gray-300 ' placeholder='your.email@example.com' type="text" id='username' name='usernama' />
          </div>


<div className='text-xs text-[#FF321F] text-right w-full'>
 Forgot password?
</div>


 <button className='w-full text-sm h-8 text-white rounded-sm bg-[#FF321F]'>
  Sign In
 </button>
 </div>

<div className='flex w-full py-4 justify-between items-center gap-3'><hr  className=' w-full' />OR<hr  className=' w-full' /></div>

<div className='flex flex-col w-full gap-2'>

<div className='w-full h-8 flex  border rounded-sm border-gray-200 justify-center items-center'>
<div className='w-6 h-4'><img src="../../public/img/logo/Sign-Up/git.svg" alt="" /></div>
<li className=' list-none  text-xs ' >Continue with LinkedIn</li>
</div>

<div className='w-full h-8 flex  border rounded-sm border-gray-200 justify-center items-center'>
<div className='w-6 h-4'><img src="../../public/img/logo/Sign-Up/Chrome.svg" alt="" /></div>
<li className=' list-none  text-xs ' >Continue with LinkedIn</li>
</div>

</div>



<div className='text-xs pt-5 '>Don't have an account? <span className='text-[#FF321F]'>Sign Up</span></div>








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