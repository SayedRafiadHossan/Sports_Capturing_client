import React from "react";
import { useLoaderData } from "react-router-dom";
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
      <div className="grid grid-cols-3 ml-20 my-10">
        {datas.map((c) => (
          <HomeCard key={c._id} c={c}></HomeCard>
        ))}
      </div>
      <div>
        <ExtraService></ExtraService>
      </div>
      {/* Service Card */}
    </nav>
  );
};

export default Home;
