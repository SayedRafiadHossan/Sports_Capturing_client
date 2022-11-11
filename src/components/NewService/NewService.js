import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const NewService = () => {
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;

    const users = {
      name: name,
      img: img,
      rating: rating,
      price: price,
      description: description,
    };

    fetch("https://sports-photographer-server-nine.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Service added", {
            theme: "colored",
          });
          form.reset();
        }

        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder} className="mx-[20%] mb-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          <input
            name="name"
            type="text"
            placeholder="service"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="img"
            type="text"
            placeholder="photoUrl"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="rating"
            type="text"
            placeholder="rating"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            name="price"
            type="text"
            placeholder="price"
            className="input input-ghost w-full input-bordered"
            required
          />
        </div>
        <textarea
          name="description"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="description"
        ></textarea>
        <input className="btn" type="submit" value="Place Your Order" />
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default NewService;
