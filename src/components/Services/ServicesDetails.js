import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, img, name, description, price } = details;
  return (
    <div>
      <div className="lg:flex lg:w-[70%] mx-auto shadow-2xl mt-20 mb-56 m-5">
        <div className="lg:w-[75%]">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt=""
                className="block object-cover object-center w-full rounded-md bg-gray-500"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="lg:w-[25%]  items-center flex flex-col justify-center">
          <h1 className="mb-4 text-xl font-extrabold">{name}</h1>
          <p className="mb-4 font-bold">ID : {_id}</p>
          <p className="font-bold">Price : {price}</p>
          <p className="leading-snug mt-5 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
