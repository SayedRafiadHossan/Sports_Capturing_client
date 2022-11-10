import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Page/Hooks/useAuth";
import SingleReview from "../SingleReview/SingleReview";

const ReviewPart = () => {
  const [reviewDelete, setReviewDelete] = useState([]);
  const handleReviewDelete = (id) => {
    const proceed = window.confirm("Are you sure delete this review");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviewDelete.filter((odr) => odr._id !== id);
            setReviewDelete(remaining);
          }
        })
        .finally(window.location.reload());
    }
  };

  const details = useLoaderData();
  const { user, logout } = useAuth();
  //   console.log(details);
  const userData = details?.filter((x) => x.photo === user?.photoURL);
  console.log(userData);
  const { _id } = userData;
  return (
    <>
      <div>
        {userData.map((x) => (
          <SingleReview
            x={x}
            key={_id}
            handleReviewDelete={handleReviewDelete}
          ></SingleReview>
        ))}
      </div>
    </>
  );
};

export default ReviewPart;
