import React from "react";
import Banner from "./Banner/Banner";
import img from "../Images/arg.jpg";

const Home = () => {
  return (
    <nav>
      <div>
        <Banner></Banner>
      </div>

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-5 mt-10">Why Choose Us?</h1>
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col mt-20 px-8 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Experts remove the hassle
                </p>
                <p className="leading-snug">
                  Celebrating your team is simple with our hassle-free
                  photographic and video service.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Access your photos and videos quickly
                </p>
                <p className="leading-snug">
                  A professional edit of your sports photos and videos will be
                  available within 3 business days of the shoot.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Affordable packages for all budgets
                </p>
                <p className="leading-snug">
                  We offer great value professional photography packages for
                  sporting teams with the option of group or individual payment.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={img}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="my-8">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
            <h1 className="text-4xl font-semibold leading-none text-center">
              What our customers are saying about us
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p>Leroy Jenkins</p>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Accusantium illum cupiditate harum asperiores iusto quos quasi
                  quis quae! Fugit doloribus, voluptatum quidem magnam velit
                  excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                  veritatis, quos iure harum.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p>Leroy Jenkins</p>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Home;
