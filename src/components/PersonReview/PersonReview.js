import React, { useEffect, useState } from "react";
import ReviewParts from "../ReviewParts/ReviewParts";

const PersonReview = ({ _id }) => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://sport-photographer-servers.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const serviceReviews = reviews?.filter((x) => x.service === _id);
  console.log(serviceReviews);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto">
      {serviceReviews?.map((x) => (
        <ReviewParts x={x} key={_id}></ReviewParts>
      ))}
    </div>
  );
};

export default PersonReview;
