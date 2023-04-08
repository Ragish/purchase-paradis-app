//app/products/page.js

"use client";

import React from "react";
import ProductListing from "./ProductListing";
import Search from "../sidebar/Search";
import FilterProducts from "../sidebar/FilterProducts";
import Category from "../sidebar/Category";
import ColorFilter from "../sidebar/ColorFilter";
import CompanyFilter from "../sidebar/CompanyFilter";
import styles from "./productListingPage.css";
import PriceFilter from "../sidebar/PriceFilter";

export default function Page() {
  const {
    products,
    searchQuery,
    filteredProducts,
    setSearchQuery,
    setCategoryFilter,
    setColorFilter,
    setCompanyFilter,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
  } = FilterProducts();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelection = (category) => {
    setCategoryFilter(category);
  };

  const handleColorSelection = (color) => {
    setColorFilter(color);
  };

  const handleCompanySelection = (company) => {
    setCompanyFilter(company);
  };
  const handleMinPriceSelection = (minimum) => {
    setMinPrice(minimum);
  };
  const handleMaxPriceSelection = (maximum) => {
    setMaxPrice(maximum);
  };
  // console.log(minPrice);
  // console.log(maxPrice);

  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setColorFilter("All");
    setCompanyFilter("All");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="productPage mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex items-start">
      <aside className="flex flex-wrap w-full flex-col">
        <Search onSearch={handleSearch} />
        <Category onCategorySelect={handleCategorySelection} />
        <CompanyFilter onCompanySelect={handleCompanySelection} />
        <ColorFilter onColorSelect={handleColorSelection} />
        <PriceFilter
          onMinPriceChange={handleMinPriceSelection}
          onMaxPriceChange={handleMaxPriceSelection}
        />
        <button
          onClick={clearFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Clear Filters
        </button>
      </aside>

      <ProductListing className="w-3/4" products={filteredProducts} />
    </div>
  );
}
