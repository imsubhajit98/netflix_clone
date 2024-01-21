function Signin() {
  return (
    <div
      style={{
        background:
          "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      }}
    >
      <div className="main flex justify-center items-center h-screen">
        <div className="sub_main bg-black bg-opacity-70 p-20 text-white rounded-lg mx-2">
          <h2 className="text-3xl font-bold mb-7">SignIn</h2>

          {/* email or phone */}
          <div className="mb-7">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none text-white"
            />
          </div>

          {/* password */}
          <div className="mb-7">
            <input
              type="password"
              placeholder="Passwprd"
              className="w-full px-3 py-3 rounded-md bg-[#333333] outline-none text-white"
            />
          </div>

          {/* signin button */}
          <div className="mb-2">
            <button
              type="button"
              className="bg-[#e50815] w-full py-3 rounded-md"
            >
              Signin
            </button>
          </div>

          {/* checkbox */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              {/* left */}
              <div className="flex justify-between items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="text-gray-400 font-light text-sm">
                  Remember
                </label>
              </div>
              {/* right */}
              <p className="font-light text-sm text-gray-400">Need help?</p>
            </div>
          </div>
        
          {/* signup now */}
          <div className="mb-2">
            <p>
              <span className="font-light text-sm text-gray-400">
                New to Netflix?
              </span>{" "}
              <span className="hover:underline cursor-pointer font-light">
                {" "}
                Sign up now.
              </span>
            </p>
          </div>

          {/* learn more */}
          <div className="mb-2">
            <p className="text-xs text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-blue-600">Learn more.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
