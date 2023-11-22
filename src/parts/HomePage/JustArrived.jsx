import React from "react";
import { Link } from "react-router-dom";

function JustArrived() {
  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            just arrived <br />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="flex -mx-4 flex-row relative">
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src="/assets/images/content/img-carousel-1.jpg"
                alt="pot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Racking Plants</h5>
            <span className="">IDR 2.400.000</span>
            <a href="#details.html" className="stretched-link"></a>
            {/* <!-- fake children --> */}
          </div>
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src="/assets/images/content/img-carousel-2.jpg"
                alt="pot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
            <span className="">IDR 89.300</span>
            <a href="#details.html" className="stretched-link"></a>
            {/* <!-- fake children --> */}
          </div>
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src="/assets/images/content/img-carousel-3.jpg"
                alt="pot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Bankyu Minimax</h5>
            <span className="">IDR 67.000.000</span>
            <a href="#details.html" className="stretched-link"></a>
            {/* <!-- fake children --> */}
          </div>
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src="/assets/images/content/img-carousel-4.jpg"
                alt="pot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
            <span className="">IDR 12.000.000</span>
            <a href="#details.html" className="stretched-link"></a>
            {/* <!-- fake children --> */}
          </div>
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src="/assets/images/content/img-carousel-5.jpg"
                alt="pot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
            <span className="">IDR 7.300.000</span>
            <a href="#details.html" className="stretched-link"></a>
            {/* <!-- fake children --> */}
          </div>
          <div className="px-4 relative card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ width: "287px", height: "386px" }}
            >
              <img
                src="/assets/images/content/img-carousel-5.jpg"
                alt="pot"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
            <span className="">IDR 7.300.000</span>
            <a href="#details.html" className="stretched-link"></a>
            {/* <!-- fake children --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JustArrived;
