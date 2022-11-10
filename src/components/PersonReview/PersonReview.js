import React, { useEffect, useState } from "react";
import ReviewParts from "../ReviewParts/ReviewParts";

const PersonReview = ({ _id }) => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const serviceReviews = reviews?.filter((x) => x.service === _id);
  console.log(serviceReviews);

  return (
    <>
      <div>
        {serviceReviews?.map((x) => (
          <ReviewParts x={x} key={_id}></ReviewParts>
        ))}
      </div>
    </>
  );
};

export default PersonReview;
