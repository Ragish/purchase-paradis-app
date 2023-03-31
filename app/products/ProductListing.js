import React, { useState } from "react";

const ProductListing = ({ products }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="section-center featured-products">
      <h2 className="text-2xl font-semibold mb-6">Latest Products</h2>
      <div className="flex flex-wrap -mx-2">
        {products.length > 0 ? (
          products.map((product) => {
            const handleImageLoad = () => {
              setLoaded(true);
            };

            return (
              <div
                key={product._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
              >
                <div className="bg-white shadow rounded-md p-4 h-full flex flex-col">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-48 object-cover object-center mb-4 rounded transition-opacity duration-500 ${
                      loaded ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
