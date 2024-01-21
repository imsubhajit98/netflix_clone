import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
function Faq({title,desc}) {
  const [open, setOpen]= useState(false);


  return (
    <div>
      <div className="faq_main container mx-auto lg:max-w-6xl md:max-w-6xl text-white ">
        <div className="my-5">
            <div className="main top bg-[#2d2d2d] hover:bg-[#3d3d3d] flex justify-between items-center px-5 py-4  mb-2 cursor-pointer" onClick={()=> setOpen(!open)}>
                
                <div className="left">
                    <h1 className="lg:text-2xl md:text-2xl text-xl ">{title}</h1>
                </div>
                <div className="right">
                  {open ? <button type="button" className="text:text-4xl md:text-4xl text-2xl">
                    <AiOutlineMinus />
                  </button> : <button type="button" className="text:text-4xl md:text-4xl text-2xl">
                    <AiOutlinePlus />
                  </button>}
                  
                  
                </div>
            </div>
            {open && <div className="main-bottom bg-[#414141] px-5 py-4 my-[1px] ">
                <p className="lg:text-start md:text-start sm:text-start text-justify">{desc}</p>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Faq
