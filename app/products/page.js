//app/products/page.js

"use client";

import React from "react";
import ProductListing from "./ProductListing";
import Search from "../sidebar/Search";
import FilterProducts from "../sidebar/FilterProducts";
import Category from "../sidebar/Category";
import ColorFilter from "../sidebar/ColorFilter";
import CompanyFilter from "../sidebar/CompanyFilter";

export default function Page() {
  const {
    products,
    searchQuery,
    filteredProducts,
    setSearchQuery,
    setCategoryFilter,
    setColorFilter,
    setCompanyFilter,
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

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Category onCategorySelect={handleCategorySelection} />
      <ColorFilter onColorSelect={handleColorSelection} />
      <CompanyFilter onCompanySelect={handleCompanySelection} />
      <ProductListing products={filteredProducts} />
    </div>
  );
}
