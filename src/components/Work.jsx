import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: "2020",
    job: 'Fild Service Engineer',
    duration: "3 years",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    year: "2010",
    job: "Display Technician, Assitant Manager",
    duration: "10 years",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-3xl font-bold text-center text-[#001b5e]">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          job={item.job}
          duration={item.duration}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Work;
