import React from "react";
import assets from "../assets/assets";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-section">
        <div className="mx-4 sm:mx-8 lg:mx-20">
          <div className="mt-4 relative">
            {/* Mobile e min height, boro screen e natural height */}
            <img
              className="w-full min-h-140 sm:min-h-125 md:min-h-0 object-cover rounded-lg"
              src={assets.banner}
              alt=""
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-6">
              <div>
                <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white">
                  Your world of joy
                </h1>
                <p className="font-medium text-xs md:text-sm text-center text-white mt-2 max-w-md mx-auto">
                  From local escapes to far-flung adventures, find what makes
                  you happy anytime, anywhere
                </p>
              </div>

              {/* Search box */}
              <div className="w-full sm:w-[90%] lg:w-[75%] xl:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white py-4 px-4 mt-6 md:mt-10 rounded-md shadow">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 shrink-0 border border-gray-300 rounded-md"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Where</h4>
                    <p className="text-sm text-gray-600">Search destinations</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 shrink-0 border border-gray-300 rounded-md"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">When</h4>
                    <p className="text-sm text-gray-600">
                      February 05 ~ March 14
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 shrink-0 border border-gray-300 rounded-md"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tour Type</h4>
                    <p className="text-sm text-gray-600">All tours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="w-full py-3 px-4 bg-primary text-white rounded-md cursor-pointer">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Why choose */}
          <div className="mt-20">
            <div>
              <h2 className="text-3xl font-bold">Why choose Tourz</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
              <div className="flex flex-col items-center justify-center text-center p-8">
                <div>
                  <img
                    className="w-16 object-cover"
                    src={assets.ticket}
                    alt=""
                  />
                </div>
                <div className="my-2">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Ultimate flexibility
                  </h4>
                  <p className="text-sm font-normal text-gray-800">
                    You're in control, with free cancellation and payment
                    options to satisfy any plan or budget.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-8">
                <div>
                  <img
                    className="w-16 object-cover"
                    src={assets.hotBalloon}
                    alt=""
                  />
                </div>
                <div className="my-2">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Memorable experiences
                  </h4>
                  <p className="text-sm font-normal text-gray-800">
                    Browse and book tours and activities so incredible, you'll
                    want to tell your friends.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-8">
                <div>
                  <img
                    className="w-16 object-cover"
                    src={assets.diamond}
                    alt=""
                  />
                </div>
                <div className="my-2">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Quality at our core
                  </h4>
                  <p className="text-sm font-normal text-gray-800">
                    High-quality standards. Millions of reviews. A tourz
                    company.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center p-8">
                <div>
                  <img
                    className="w-16 object-cover"
                    src={assets.medal}
                    alt=""
                  />
                </div>
                <div className="my-2">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Award-winning support
                  </h4>
                  <p className="text-sm font-normal text-gray-800">
                    New price? New plan? No problem. We're here to help, 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="why-choose"></section>
    </>
  );
};

export default Home;
