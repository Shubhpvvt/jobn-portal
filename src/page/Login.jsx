import React from 'react'
import Logo from '../part/Logo.jsx'

const Login = () => {
  return (
    <div className='w-screen  h-screen flex-col flex'>

      <div className='w-screen px-30 flex-1 py-20 gap-14 phone:flex-col flex justify-center items-center  phone:px-10 phone:h-fit  bg-whitew'>




        <div className='w-1/3 phone:w-full  px-7 py-6 border border-gray-200 rounded-xl  flex flex-col justify-start items-center bg-whitew h-full '>
          <Logo />
          <h2 className='text-lg py-1.5 font-semibold '>Welcome Back!</h2>

          <div className='flex flex-col w-full gap-2'>

            <div className='flex h-[3.7rem]  w-full  flex-col gap-2 ' >
              <label className='text-xs' htmlFor="usernama">Emai</label>
              <input className='outline-none px-2 w-full h-full  text-xs border-2 rounded-sm border-gray-300 ' placeholder='your.email@example.com' type="text" id='username' name='usernama' />
            </div>

            <div className='flex h-[3.7rem]  w-full  flex-col gap-2 ' >
              <label className='text-xs' htmlFor="usernama">Password</label>
              <input className='outline-none px-2 w-full h-full  text-xs border-2 rounded-sm border-gray-300 ' placeholder='your.email@example.com' type="text" id='username' name='usernama' />
            </div>


            <div className='text-xs text-[#FF321F] text-right w-full'>
              Forgot password?
            </div>


            <button className='w-full text-sm h-8 text-white rounded-sm bg-[#FF321F]'>
              Sign In
            </button>
          </div>

          <div className='flex w-full py-2 justify-between items-center gap-3'><hr className=' w-full' />OR<hr className=' w-full' /></div>

          <div className='flex flex-col w-full gap-2'>

            <div className='w-full h-8 flex  border rounded-sm border-gray-200 justify-center items-center'>
              <div className='w-6 h-4'><img src="img/logo/Sign-Up/git.svg" alt="" /></div>
              <li className=' list-none  text-xs ' >Continue with LinkedIn</li>
            </div>

            <div className='w-full h-8 flex  border rounded-sm border-gray-200 justify-center items-center'>
              <div className='w-6 h-4'><img src="img/logo/Sign-Up/Chrome.svg" alt="" /></div>
              <li className=' list-none  text-xs ' >Continue with LinkedIn</li>
            </div>

          </div>



          <div className='text-xs pt-5 '>Don't have an account? <span className='text-[#FF321F]'>Sign Up</span></div>








        </div>





        <div className='w-1/2  phone:w-full  phone:py-7  rounded-2xl bg-[#FFF1F0] flex flex-col justify-center items-center  h-full'>



          <div className='w-full px-10 object-contain    h-80  phone:h-72'>
            <img src="img/login.png" className='object-cover' alt="" />
          </div>


          <div className='text-center  '>
            <h3 className='font-bold py-3 text-lx'>Connect. Grow. Succeed.</h3>
            <h4 className='text-xs w-72'>Your gateway to the CTRM/ETRM professional community.</h4>
          </div>













        </div>













      </div>


      <div className='w-full h-10 flex phone:px-7 phone:h-32 phone:py-6 px-32 justify-between  items-center  '>

        <div className=" flex gap-4 text-sm justify-center items-center ">
          <h4>About</h4>
          <h4>Resources</h4>
          <h4>Legal</h4>
        </div>
        <div className=" flex gap-10 ">


          <div className="">
            <img src="img/logo/socal/linkedin.svg" alt="" />
          </div>


          <div className="">
            <img src="img/logo/socal/tuter.svg" alt="" />
          </div>


          <div className="">
            <img src="img/logo/socal/Vector.svg" alt="" />
          </div>




        </div>


      </div>




    </div>

  )
}

export default Login