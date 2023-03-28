import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div>
      <AiOutlineMenu
        className="absolute top-4 right-4 z-[99] md:hidden"
        onClick={handleNav}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a onClick={handleNav} href="#main" className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineHome size={20}/>
            <span className="pl-4">Home</span>
            </a>
            <a onClick={handleNav} href="#about" className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                <IoPersonOutline size={20}/>
            <span className="pl-4">About</span>
            </a>
            
            <a onClick={handleNav} href="work" className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                <MdOutlineWorkHistory size={20}/>
            <span className="pl-4">Work</span>
            </a>

            <a onClick={handleNav} href="#portfolio" className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                <GrProjects size={20}/>
            <span className="pl-4">Portfolio</span>
            </a>
            <a onClick={handleNav} href="#contact" className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                <AiOutlineMail size={20}/>
            <span className="pl-4">Contact</span>
            </a>
        </div>
      ) : (
            ''
        )}
        <div className="md:block hidden fixed top-[25%] z-10r">
            <div className="flex flex-col">
                <a href="#main" className=" rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#about" className=" rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                    <IoPersonOutline size={20}/>
                </a>
                <a href="#work" className=" rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                    <MdOutlineWorkHistory size={20}/>
                </a>
                <a href="#portfolio" className=" rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                    <GrProjects size={20}/>
                </a>
                <a href="#contact" className=" rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>

    </div>
  );
};

export default Sidenav;
