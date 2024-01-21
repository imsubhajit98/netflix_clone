import HeroSection from "../components/HeroSection"
import Enjoy from "../components/Enjoy"
import Download from "../components/Download"
import Watch from "../components/Watch"
import Footer from "../components/Footer"
import CreateProfile from "../components/CreateProfile"
import { faqData } from "../data/faqData"
import Faq from "../components/Faq"


function Home() {
  return (
    <div>
      <HeroSection/>
      <Enjoy/>
      <Download/>
      <Watch/>
      <CreateProfile/>

      <div className="">
        <h2 className="text-white text-center font-bold lg:text-5xl md:text-5xl text-3xl py-5 ">Frequently Asked <br className="lg:hidden md:hidden sm:hidden block" />Questions </h2>
        <div>
          {faqData.map((item, index)=>{
            const {title,desc}=item;
            return(
              <Faq 
             key={index} title={title} desc={desc}/>
            )
          })}
          
        </div>
        <div className="lg:mb-6 md:mb-6 mb-3">
      <div className="container mx-auto flex justify-center  items-center h-96">
        <div className="">
         
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
      </div>
         
      <Footer/>
      

    </div>
  )
}

export default Home
