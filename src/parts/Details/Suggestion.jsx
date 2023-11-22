import React from "react";

const Suggestion = () => {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete Your Room <br />
            With What We Designed
          </h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-50">
                <img
                  src="/assets/images/content/chair-office-1.jpg"
                  alt="chair"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair</h5>
              <span className="">IDR 200.000</span>
              <a href="details.html" className="stretched-link"></a>
              {/* <!-- fake children --> */}
            </div>
          </div>
          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-50">
                <img
                  src="/assets/images/content/chair-office-2.jpg"
                  alt="chair"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair</h5>
              <span className="">IDR 200.000</span>
              <a href="details.html" className="stretched-link"></a>
              {/* <!-- fake children --> */}
            </div>
          </div>
          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-50">
                <img
                  src="/assets/images/content/chair-office-3.jpg"
                  alt="chair"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair</h5>
              <span className="">IDR 200.000</span>
              <a href="details.html" className="stretched-link"></a>
              {/* <!-- fake children --> */}
            </div>
          </div>
          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-50">
                <img
                  src="/assets/images/content/chair-office-4.jpg"
                  alt="chair"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair</h5>
              <span className="">IDR 200.000</span>
              <a href="details.html" className="stretched-link"></a>
              {/* <!-- fake children --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
