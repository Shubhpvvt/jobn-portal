import React from 'react'
import Logo from '../part/Logo.jsx'

const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">

      {/* MAIN CONTENT */}
      <div className="
        flex-1 w-full
        flex justify-center items-center
        px-6 py-10
        md:px-16 md:py-16
      ">

        <div className="
          w-full max-w-6xl
          flex flex-col lg:flex-row
          gap-10
          items-center
        ">

          {/* LEFT CARD */}
          <div className="
            w-full lg:w-1/3
            px-6 py-6
            border border-gray-200
            rounded-xl
            flex flex-col items-center
            bg-white
          ">
            <Logo />
            <h2 className="text-lg py-2 font-semibold">
              Welcome Back!
            </h2>

            <div className="flex flex-col w-full gap-3">

              <div className="flex flex-col gap-1">
                <label className="text-xs">Email</label>
                <input
                  className="outline-none px-3 h-10 text-xs border rounded border-gray-300"
                  placeholder="your.email@example.com"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs">Password</label>
                <input
                  className="outline-none px-3 h-10 text-xs border rounded border-gray-300"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>

              <div className="text-xs text-[#FF321F] text-right">
                Forgot password?
              </div>

              <button className="w-full text-sm h-9 text-white rounded bg-[#FF321F]">
                Sign In
              </button>
            </div>

            <div className="flex w-full py-3 items-center gap-2 text-xs">
              <hr className="flex-1" /> OR <hr className="flex-1" />
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="w-full h-9 flex border rounded border-gray-200 justify-center items-center gap-2">
                <img src="img/logo/Sign-Up/git.svg" className="w-4" />
                <span className="text-xs">Continue with LinkedIn</span>
              </div>

              <div className="w-full h-9 flex border rounded border-gray-200 justify-center items-center gap-2">
                <img src="img/logo/Sign-Up/Chrome.svg" className="w-4" />
                <span className="text-xs">Continue with Google</span>
              </div>
            </div>

            <div className="text-xs pt-5">
              Don&apos;t have an account?{" "}
              <span className="text-[#FF321F]">Sign Up</span>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="
            w-full lg:w-1/2
            rounded-2xl
            bg-[#FFF1F0]
            flex flex-col
            justify-center items-center
            px-6 py-10
          ">
            <div className="w-full max-w-md h-64">
              <img
                src="img/login.png"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>

            <div className="text-center mt-4">
              <h3 className="font-bold text-lg">
                Connect. Grow. Succeed.
              </h3>
              <h4 className="text-xs max-w-xs mx-auto">
                Your gateway to the CTRM/ETRM professional community.
              </h4>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="
        w-full
        flex flex-col md:flex-row
        justify-between items-center
        gap-4
        px-6 md:px-20
        py-4
        text-sm
      ">
        <div className="flex gap-4">
          <h4>About</h4>
          <h4>Resources</h4>
          <h4>Legal</h4>
        </div>

        <div className="flex gap-6">
          <img src="img/logo/socal/linkedin.svg" />
          <img src="img/logo/socal/tuter.svg" />
          <img src="img/logo/socal/Vector.svg" />
        </div>
      </div>

    </div>
  )
}

export default Login
