import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../part/Logo.jsx";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">

      {/* MAIN CONTENT */}
      <div className="flex-1 w-full flex justify-center items-center py-16">

        {/* FIXED DESKTOP WIDTH */}
        <div className="w-[1100px] flex flex-row gap-12 items-center ml-40">

          {/* LEFT LOGIN CARD */}
          <div className="w-[380px] px-6 py-6 border border-gray-200 rounded-xl flex flex-col items-center bg-white">
            <Logo />

            <h2 className="text-lg py-2 font-semibold">
              Welcome Back!
            </h2>

            <div className="flex flex-col w-full gap-3">

              <div className="flex flex-col gap-1">
                <label className="text-xs">Email</label>
                <input
                  type="text"
                  placeholder="your.email@example.com"
                  className="px-3 h-10 text-xs border rounded border-gray-300 outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="px-3 h-10 text-xs border rounded border-gray-300 outline-none"
                />
              </div>

              <div className="text-xs text-[#FF321F] text-right">
                Forgot password?
              </div>

              <button
                onClick={() => navigate("/onboarding")}
                className="h-9 bg-[#FF321F] text-white text-sm rounded"
              >
                Sign In
              </button>
            </div>

            <div className="flex w-full items-center gap-2 py-3 text-xs">
              <hr className="flex-1" /> OR <hr className="flex-1" />
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="h-9 border rounded flex items-center justify-center gap-2">
                <img src="img/logo/Sign-Up/git.svg" className="w-4" />
                <span className="text-xs">Continue with LinkedIn</span>
              </div>

              <div className="h-9 border rounded flex items-center justify-center gap-2">
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
          <div className="w-[520px] bg-[#FFF1F0] rounded-2xl px-8 py-10 flex flex-col items-center">
            <div className="w-full h-72">
              <img
                src="img/login.png"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="text-center mt-4">
              <h3 className="font-bold text-lg">
                Connect. Grow. Succeed.
              </h3>
              <p className="text-xs max-w-xs mx-auto">
                Your gateway to the CTRM/ETRM professional community.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full flex justify-between items-center px-20 py-4 text-sm">
        <div className="flex gap-4">
          <span>About</span>
          <span>Resources</span>
          <span>Legal</span>
        </div>

        <div className="flex gap-6">
          <img src="img/logo/socal/linkedin.svg" />
          <img src="img/logo/socal/tuter.svg" />
          <img src="img/logo/socal/Vector.svg" />
        </div>
      </footer>

    </div>
  );
};

export default Login;
