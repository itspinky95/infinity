import React, { useState, useEffect } from "react";
import Portfolioitem from "./Portfolioitem";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

function Portfolio() {
  const [portfolioData, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "portfolio"));
        setPortfolio(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="portfolio" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-3xl font-bold text-center text-[#001b5e]">
        My Portfolio
      </h1>
      <p className="text-center text-[#001b5e]">My portfolio showcases a variety of projects I've worked on, ranging from web applications to mobile apps. Each project represents a unique challenge and opportunity for me to learn and grow as a developer.<br/> Whether it's building a robust backend or designing an intuitive user interface, I strive to create high-quality software that solves real-world problems.<br/> I hope you enjoy exploring my portfolio and learning more about my work.</p>
      <div className="">
      {portfolioData.map((item) => (
        <Portfolioitem
          key={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          url={item.url}
        />
      ))}
      </div>
    </div>
  );
}

export default Portfolio;
