import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ExtraService from "./ExtraService/ExtraService";
import HomeCard from "./HomeCard/HomeCard";
const Home = () => {
  const data = useLoaderData();
  const [x, y, z, ...datas] = data;

  return (
    <nav>
      <div>
        <Banner></Banner>
      </div>
      <h1 className="font-bold text-4xl text-blue-400">Services</h1>
      <div className="grid lg:grid-cols-3  lg:ml-20 my-10">
        {datas.map((c) => (
          <HomeCard key={c._id} c={c}></HomeCard>
        ))}
      </div>
      <Link to={`/services`}>
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
        >
          See All
        </button>
      </Link>
      <div>
        <ExtraService></ExtraService>
      </div>
      {/* Service Card */}
    </nav>
  );
};

export default Home;
