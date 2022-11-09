import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item  relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>
      {/* <div className="absolute flex justify-start transform -translate-y-1/2 lg:w-2/5 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Course</button>
        <button className="btn btn-outline btn-warning">Blog</button>
      </div> */}
      <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-24 top-1/4">
        <h1 className="lg:text-6xl font-bold text-white">
          Sports <span className="text-red-600">Capturing</span>
          <br />
          <span className="text-red-600">Photo </span>Services
        </h1>
      </div>
      <div className=" absolute flex justify-end transform lg:-translate-y-1/2 lg:left-24 top-1/2">
        <p className="lg:text-2xl text-white">
          We're here to edit any kind of image you have.
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
