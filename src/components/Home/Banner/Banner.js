import React from "react";
import img1 from "../../Images/banner/1.jpg";
import img2 from "../../Images/banner/2.jpg";
import img3 from "../../Images/banner/3.jpg";
import img4 from "../../Images/banner/4.jpg";
import img5 from "../../Images/banner/5.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 5,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div>
      <div className="carousel w-[70%]  mx-auto py-10">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
