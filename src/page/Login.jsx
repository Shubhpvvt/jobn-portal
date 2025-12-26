import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../part/Logo.jsx";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">

      {/* MAIN */}
      <div className="flex-1 flex justify-center items-center px-6 py-4">

        <div className="
          w-full max-w-6xl
          flex flex-col lg:flex-row
          gap-10
          items-center
        ">

          {/* LEFT LOGIN CARD */}
          <div className="
            w-full max-w-md
            border border-gray-200
            rounded-xl
            px-6 py-4
            flex flex-col items-center
            bg-white
          ">
            <Logo />

            <h2 className="text-lg font-semibold py-2">
              Welcome Back!
            </h2>

            <div className="w-full flex flex-col gap-3">
              <div>
                <label className="text-xs">Email</label>
                <input
                  type="text"
                  placeholder="your.email@example.com"
                  className="w-full h-10 px-3 text-xs border rounded outline-none"
                />
              </div>

              <div>
                <label className="text-xs">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-10 px-3 text-xs border rounded outline-none"
                />
              </div>

              <div className="text-xs text-[#FF321F] text-right">
                Forgot password?
              </div>

              <button
                onClick={() => navigate("/onboarding")}
                className="h-9 bg-[#FF321F] text-white rounded text-sm"
              >
                Sign In
              </button>
            </div>

            <div className="flex items-center w-full gap-2 py-3 text-xs">
              <hr className="flex-1" /> OR <hr className="flex-1" />
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="h-9 border rounded flex items-center justify-center gap-2">
                <img src="img/logo/Sign-Up/git.svg" className="w-4" />
                <span className="text-xs">Continue with LinkedIn</span>
              </div>

              <div className="h-9 border rounded flex items-center justify-center gap-2">
                <img src="img/logo/Sign-Up/Chrome.svg" className="w-4" />
                <span className="text-xs">Continue with Google</span>
              </div>
            </div>

            <div className="text-xs pt-4">
              Don&apos;t have an account?{" "}
              <span className="text-[#FF321F]">Sign Up</span>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="
            w-full lg:w-1/2
            bg-[#FFF1F0]
            rounded-2xl
            px-6 py-6
            flex flex-col items-center
          ">
            <img
              src="img/login.png"
              alt=""
              className="w-full max-w-md h-64 object-cover rounded-xl"
            />

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
      <footer className="
        w-full
        flex flex-col md:flex-row
        justify-between items-center
        gap-4
        px-6 md:px-20
        py-2
        text-sm
      ">
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
