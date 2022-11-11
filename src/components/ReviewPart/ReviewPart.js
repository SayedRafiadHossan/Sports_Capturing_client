import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Page/Hooks/useAuth";
import SingleReview from "../SingleReview/SingleReview";

const ReviewPart = () => {
  const [reviewDelete, setReviewDelete] = useState([]);
  const handleReviewDelete = (id) => {
    const proceed = window.confirm("Are you sure delete this review");
    if (proceed) {
      fetch(`https://sports-photographer-server-nine.vercel.app/orders/${id}`, {
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
      {userData?.length === 0 ? (
        <>
          <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-40 h-40 dark:text-gray-600"
              >
                <path
                  fill="currentColor"
                  d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                ></path>
                <rect
                  width="176"
                  height="32"
                  x="168"
                  y="320"
                  fill="currentColor"
                ></rect>
                <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                ></polygon>
                <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                ></polygon>
              </svg>
              <p className="text-3xl">Looks like you have no review</p>
              <Link
                rel="noopener noreferrer"
                to="/services"
                className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Back to Review
              </Link>
            </div>
          </section>
        </>
      ) : (
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
      )}
    </>
  );
};

export default ReviewPart;