import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[60vh] px-4 py-12">
      <div className="text">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Shop Now
        </button>
      </div>
      <div className="img-container relative">
        <img
          src="/images/banner-img.jpeg"
          alt="Banner"
          className="Banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
