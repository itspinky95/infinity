import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";


function Main() {
  const back = "https://firebasestorage.googleapis.com/v0/b/project-infinity-1995.appspot.com/o/portfolio%2Fback.jpg?alt=media&token=93209ecf-261f-4630-9b66-e6c15a78d504"

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left "
        src={back}
        alt="background photo of coffee, calender and a macbook lasty spoity on a phone"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800">Hi, I'm Scott Jones</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a 
            <TypeAnimation
              sequence={[
                "Junior Developer", // Types 'One'
                3000, // Waits 1s
                "Web Dev", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "Software Dev", // Types 'Three' without deleting 'Two'
                3000, // Waits 1s
                "Tech Enthusiast", // Deletes 'Three' and types 'Four'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
              <div className="flex justify-between pt-6 max-w-[200px] w-full ">
                <a href="https://twitter.com/itspinky95" target="_blank" rel="noopener noreferrer"><FaTwitter className=" cursor-pointer" size={20}/></a>
                <a href="https://www.linkedin.com/in/itspinky1995" target="_blank" rel="noopener noreferrer"><FaLinkedin className=" cursor-pointer" size={20}/></a>
                <a href="https://github.com/itspinky95" target="_blank" rel="noopener noreferrer"><FaGithub className=" cursor-pointer" size={20}/></a>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
