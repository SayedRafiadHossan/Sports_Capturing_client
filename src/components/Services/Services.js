import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const allServices = useLoaderData();
  console.log(allServices);

  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mb-12 text-blue-400 mt-5">
        Choice Your Service
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 my-6 lg:ml-20">
        {allServices.map((c) => (
          <ServicesCart key={c._id} c={c}></ServicesCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
