import React from "react";
import img from "../Images/Blog.jpg";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="hero-content text-center lg:text-left">
        <img src={img} alt="" />
      </div>
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          BLOG
        </h2>
        <div className="divide-y divide-gray-700">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              Difference between SQL and NoSQL?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              SQL databases are a type of system software that supports
              management, analysis, capturing and querying the structured data
              in a relational format and databases support Structured Query
              Languages.OtherSide, NoSQL databases are a type of software that
              allows to maintain and retrieve structured, unstructured,
              polymorphic data for different purpose and does not have any
              declarative query language.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is JWT, and how does it work??
            </h3>
            <p className="md:pl-0 md:col-span-7">
              JSON Web Token is an open industry standard used to share
              information between two entities, usually a client (like our app's
              frontend) and a server (our app's backend).JWTs differ from other
              web tokens in that they contain a set of claims. Claims are used
              to transmit information between two parties. What these claims are
              depends on the use case at hand. For example, a claim may assert
              who issued the token, how long it is valid for, or what
              permissions the client has been granted.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
