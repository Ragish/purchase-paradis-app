"use client";

import React, { useState } from "react";

export default function FilteredProducts({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return { filteredProducts, handleSearch };
}
