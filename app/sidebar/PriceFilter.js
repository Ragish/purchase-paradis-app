// app/sidebar/PriceFilter.js

import React from "react";

const PriceFilter = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const handleMinPriceChange = (event) => {
    onMinPriceChange(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    onMaxPriceChange(Number(event.target.value));
  };

  return (
    <div className="filter priceFilter mb-6">
      <h4 className="text-lg font-semibold mb-2">Price</h4>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-20 px-2 py-1 border border-gray-300 rounded-md"
        />
        <span>-</span>
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-20 px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
