import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <div className="main flex lg:justify-around md:justify-around justify-between items-center py-5 px-5 lg:mb-28 mb-10">
        {/* left */}
        <div className="left">
            <div className="netflix_logo">
                <img className="lg:w-44  md:w-44 w-28" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            </div>
        </div>

        {/* right */}
        <div className="">
            <div className="main flex items-center">
                <div className="selctor bg-[#111112] text-white mx-4 lg:px-5  md:px-5 px-2  py-1 rounded-md border-[1.5px] hover:ring-2 hover:ring-gray-200 opacity-80">
                    <select name="" id="" className="bg-transparent outline-none cursor-pointer">
                        <option value="English">English</option>
                        <option value="हिन्दी ">हिन्दी</option>
                    </select>
                </div>
                

                  <Link to="signin">
                  <button type="button" className="bg-[#e50815] hover:bg-[#d80c1a] text-white px-5 py-1 rounded-lg font-bold">
                    Signin
                </button>
                  </Link>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
