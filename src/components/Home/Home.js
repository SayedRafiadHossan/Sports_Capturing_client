import React from "react";
import Banner from "./Banner/Banner";
import ExtraService from "./ExtraService/ExtraService";
const Home = () => {
  return (
    <nav>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <ExtraService></ExtraService>
      </div>
      {/* Service Card */}
    </nav>
  );
};

export default Home;
