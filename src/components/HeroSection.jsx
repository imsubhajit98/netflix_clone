import Navbar from "./Navbar"


function HeroSection() {
  return (
    <>
    <div className="lg:h-[44.5em] md:h-[44em] h-[34em]" style={{ background: 'linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)' }}>
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto flex justify-center  items-center h-96">
        <div className="">
          <h1 className="text-white text-center lg:text-5xl md:text-5xl text-3xl px-5 font-bold mb-5">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
          <p className="text-white text-center lg:text-2xl md:text-2xl text-xl mb-5" >Watch anywhere, cancel anytime.</p>
          <p className="text-white text-center lg:text-xl md:text-xl text-lg mb-5" >Ready to watch? Enter your email to 
          <br className="lg:hidden md:hidden sm:hidden" /> create or restart your membership.</p>

          <div className="flex justify-center items-center space-x-2 flex-wrap">
            <input className="bg-[#1e1e1e] text-white text-lg py-3 px-3 lg:w-96  md:w-96 w-80 mb-5 lg:mb-0 md:mb-0 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50 outline-none" type="text" placeholder="Email Address" />
            <button className="bg-[#e50815] flex items-center py-3 px-5 rounded-md gap-2" type="button">
              <p className="text-white text-lg font-bold text-center">Get Started </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="hr_line"></div>
    </>
  )
}

export default HeroSection
