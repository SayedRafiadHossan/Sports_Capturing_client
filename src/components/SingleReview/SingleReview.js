import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Page/ContextAPI/AuthProvider/AuthProvider";
const SingleReview = ({ x, handleReviewDelete }) => {
  const { user } = useContext(AuthContext);
  console.log(x);
  const { _id, photo, email, customer, message, serviceName } = x;
  console.log(email);
  const updates = (data) => {
    fetch(
      `https://sports-photographer-server-nine.vercel.app/orders/${x?._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          window.location.reload();
        }
      });
  };
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
          <div className="flex items-center justify-center">
            <button onClick={() => handleReviewDelete(_id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button>
              <label
                htmlFor={_id}
                className="btn bg-white border-none hover:bg-white"
              >
                <FontAwesomeIcon
                  className="w-7 h-7 ml-4 text-black"
                  icon={faEdit}
                ></FontAwesomeIcon>
              </label>
            </button>
          </div>
        </div>
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id={_id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor={_id}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const email = user?.email || "unregistered";
                const phone = form.phone.value;
                const message = form.message.value;

                const data = { email, phone, message };
                updates(data);
              }}
              className="mx-[20%] mb-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                <input
                  name="phone"
                  type="text"
                  placeholder="Your Phone"
                  className="input input-ghost w-full input-bordered"
                  required
                  defaultValue={x?.phone}
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Your Email"
                  defaultValue={x?.email}
                  className="input input-ghost w-full input-bordered"
                  // defaultValue={user?.email}
                />
              </div>
              <textarea
                name="message"
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Your Massage"
                defaultValue={x?.message}
              ></textarea>
              <input className="btn" type="submit" value="Place Your Order" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
