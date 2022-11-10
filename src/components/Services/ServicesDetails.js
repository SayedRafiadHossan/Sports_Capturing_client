import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../Page/ContextAPI/AuthProvider/AuthProvider";

const ServicesDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, img, name, description, price } = details;
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: name,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("order placed successfully");
          form.reset();
        }

        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="lg:flex lg:w-[70%] mx-auto shadow-2xl mt-20 mb-56 m-5">
        <div className="lg:w-[75%]">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt=""
                className="block object-cover object-center w-full rounded-md bg-gray-500"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="lg:w-[25%]  items-center flex flex-col justify-center">
          <h1 className="mb-4 text-xl font-extrabold">{name}</h1>
          <p className="mb-4 font-bold">ID : {_id}</p>
          <p className="font-bold">Price : {price}</p>
          <p className="leading-snug mt-5 text-lg">{description}</p>
        </div>
      </div>

      {/* Review Part */}

      <div>
        <h1 className="text-5xl font-bold mb-6">Your opinion matters!</h1>
        <form onSubmit={handlePlaceOrder} className="mx-[20%] mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-ghost w-full input-bordered"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-ghost w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-ghost w-full input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              className="input input-ghost w-full input-bordered"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Your Massage"
          ></textarea>
          <input className="btn" type="submit" value="Place Your Order" />
        </form>
      </div>
    </div>
  );
};

export default ServicesDetails;
