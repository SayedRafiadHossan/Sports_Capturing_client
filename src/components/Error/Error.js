import React from "react";
import { useRouteError } from "react-router-dom";
import img from "../Images/error.jpg";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center">
      <img className="w-full" src={img} alt="" />
    </div>
  );
};

export default Error;
