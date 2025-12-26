import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../part/Logo.jsx";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col">

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-10 px-4 sm:px-8 md:px-20 py-10">

        {/* ===== LEFT LOGIN CARD ===== */}
        <div className="w-full md:w-1/3 border border-gray-200 rounded-xl px-6 py-6 flex flex-col items-center">
          <Logo />

          <h2 className="text-lg py-2 font-semibold">Welcome Back!</h2>

          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs">Email</label>
              <input
                className="outline-none px-2 py-2 text-xs border rounded-sm border-gray-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs">Password</label>
              <input
                className="outline-none px-2 py-2 text-xs border rounded-sm border-gray-300"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            <div className="text-xs text-[#FF321F] text-right">
              Forgot password?
            </div>

            <button
              onClick={() => navigate("/onboarding")}
              className="w-full h-9 text-sm text-white rounded-sm bg-[#FF321F]"
            >
              Sign In
            </button>
          </div>

          <div className="flex w-full py-4 items-center gap-2 text-xs">
            <hr className="w-full" /> OR <hr className="w-full" />
          </div>

          <div className="flex flex-col w-full gap-2">
            <div className="h-9 border rounded-sm flex items-center justify-center gap-2">
              <img src="img/logo/Sign-Up/git.svg" className="w-4" />
              <span className="text-xs">Continue with LinkedIn</span>
            </div>
            <div className="h-9 border rounded-sm flex items-center justify-center gap-2">
              <img src="img/logo/Sign-Up/Chrome.svg" className="w-4" />
              <span className="text-xs">Continue with Google</span>
            </div>
          </div>

          <div className="text-xs pt-4">
            Don&apos;t have an account?{" "}
            <span className="text-[#FF321F]">Sign Up</span>
          </div>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="w-full md:w-1/2 bg-[#FFF1F0] rounded-2xl p-6 flex flex-col items-center text-center">
          <img
            src="img/login.png"
            className="h-60 object-contain"
            alt=""
          />
          <h3 className="font-bold py-3 text-lg">
            Connect. Grow. Succeed.
          </h3>
          <p className="text-xs max-w-xs">
            Your gateway to the CTRM/ETRM professional community.
          </p>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-10 md:px-32 py-4">
        <div className="flex gap-4 text-sm">
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
