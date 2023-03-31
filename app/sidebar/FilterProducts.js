import { useState } from "react";

const FilterProducts = (products, searchQuery) => {
  if (searchQuery) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    return products;
  }
};

export default FilterProducts;
