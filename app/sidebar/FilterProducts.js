//app/sidebar/FilterProduct.js

import { useState, useEffect } from "react";

function FilterProducts() {
  const [products, setProducts] = useState([]); // Load products data here
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/api/all-products");
      const data = await response.json();
      //console.log("Products:", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filter = () => {
      const filteredBySearch = searchQuery
        ? products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : products;

      const filteredByCategory =
        categoryFilter === "All"
          ? filteredBySearch
          : filteredBySearch.filter(
              (product) => product.category === categoryFilter
            );

      const filteredByColor =
        colorFilter === "All"
          ? filteredByCategory
          : filteredByCategory.filter((product) =>
              product.color.includes(colorFilter)
            );

      const filteredByCompany =
        companyFilter === "All"
          ? filteredByColor
          : filteredByColor.filter(
              (product) => product.company === companyFilter
            );

      setFilteredProducts(filteredByCompany);
    };

    filter();
  }, [searchQuery, categoryFilter, products, colorFilter, companyFilter]);

  return {
    products,
    searchQuery,
    filteredProducts,
    setSearchQuery,
    setCategoryFilter,
    setColorFilter,
    setCompanyFilter,
  };
}

export default FilterProducts;
