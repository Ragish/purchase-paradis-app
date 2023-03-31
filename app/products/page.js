//app/products/page.js

"use client";

import React from "react";
import ProductListing from "./ProductListing";
import Search from "../sidebar/Search";
import FilterProducts from "../sidebar/FilterProducts";
import Category from "../sidebar/Category";

export default function Page() {
  const { products, searchQuery, filteredProducts, setSearchQuery } =
    FilterProducts();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Category />
      <ProductListing products={filteredProducts} />
    </div>
  );
}
