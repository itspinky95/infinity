import React from 'react';

const Portfolioitem = ({ name, image, description, url }) => {
  return (
    <div className="mb-10 ml-4">
      <ul className="border-l border-stone-200">
        <li className="flex flex-col md:flex-row items-center gap-4 p-4">
          <img className="w-64 md:w-96" src={image} alt={name} />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-700 text-lg mb-4">{description}</p>
            <a
              className="text-blue-600 font-bold text-lg hover:underline"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Portfolioitem;

