"use client";

import React, { useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Sidebar from "../sidebar/Sidebar";
import FilterProducts from "../sidebar/FilterProducts";

async function fetchProducts() {
  const response = await fetch("http://localhost:3000/api/all-products");
  const data = await response.json();
  return data;
}

export default function Page() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = FilterProducts(products, searchQuery);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Sidebar onSearch={handleSearch} />
      <ProductListing products={filteredProducts} />
    </div>
  );
}
