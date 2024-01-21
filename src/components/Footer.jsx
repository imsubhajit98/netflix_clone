

function Footer() {
  return (
    <div>
      <div className="text-gray-300 container mx-auto max-w-6xl lg:py-20 md:py-20 py-10">
        <p>Questions? Call <span className="underline">000-800-919-1694</span></p>
        <div className="main flex justify-between mb-4 cursor-pointer underline">
            <div className="one">
                <ul>
                    <li className="mb-3">FAQ</li>
                    <li className="mb-3">Investor Relations</li>
                    <li className="mb-3">Privacy</li>
                    <li className="mb-3">Speed Test</li>
                </ul>
                <div className="selctor bg-[#111112] text-white mx-4 lg:px-5  md:px-5 px-2  py-1 rounded-md border-[1.5px] hover:ring-2 hover:ring-gray-200 opacity-80">
                    <select name="" id="" className="bg-transparent outline-none cursor-pointer">
                        <option value="English">English</option>
                        <option value="हिन्दी ">हिन्दी</option>
                    </select>
                </div>
                <p className="mb-3">Netflix India</p>
            </div>
            <div className="two">
            <ul>
                    <li className="mb-3">Help Centre</li>
                    <li className="mb-3">Jobs</li>
                    <li className="mb-3">Cookie Preferences</li>
                    <li className="mb-3">Legal Notices</li>
                </ul>
            </div>
            <div className="three">
            <ul>
                    <li className="mb-3">Account</li>
                    <li className="mb-3">Ways to Watch</li>
                    <li className="mb-3">Corporate Information</li>
                    <li className="mb-3">Only on Netflix</li>
                </ul>
            </div>
            <div className="four">
            <ul>
                    <li className="mb-3">Media Centre</li>
                    <li className="mb-3">Terms of Use</li>
                    <li className="mb-3">Contact Us</li>
                    
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
