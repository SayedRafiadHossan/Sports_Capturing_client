import React from "react";
// import { useLoaderData } from "react-router-dom";

const SingleReview = ({ x, handleReviewDelete }) => {
  console.log(x);
  const { _id, photo, email, customer, message, serviceName } = x;
  console.log(email);
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={photo}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{customer}</h4>
              <span className="text-xs dark:text-gray-400">{email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <h2 className="font-bold">{serviceName}</h2>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{message}</p>
          <div>
            <button className="mr-5">Edit</button>
            <button onClick={() => handleReviewDelete(_id)}>Dlt</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
