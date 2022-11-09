import React from "react";
import { Link } from "react-router-dom";

const ServicesCart = ({ c }) => {
  const { id, img, name, description, price } = c;
  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-800 text-white  rounded-xl">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="mb-0 capitalize text-2xl font-bold"
          >
            {name}
          </Link>
        </div>
        <Link to={`/details/${id}`}>
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={img}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <p className="text-lg">Price : {price}</p>
          </div>
        </div>
        <div className="space-y-2">
          <Link rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-2xl font-semibold text-violet-400">{name}</h3>
          </Link>
          <p className="leading-snug text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
