import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const allServices = useLoaderData();
  console.log(allServices);

  return (
    <div className="grid lg:grid-cols-3 gap-6 my-6 lg:ml-20">
      {allServices.map((c) => (
        <ServicesCart key={c._id} c={c}></ServicesCart>
      ))}
    </div>
  );
};

export default Services;
