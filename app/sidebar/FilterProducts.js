//app/sidebar/FilterProduct.js

import { useState, useEffect } from "react";

function FilterProducts() {
  const [products, setProducts] = useState([]); // Load products data here
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
      const filteredByCompany =
        companyFilter === "All"
          ? filteredByCategory
          : filteredByCategory.filter(
              (product) => product.company === companyFilter
            );

      const filteredByColor =
        colorFilter === "All"
          ? filteredByCompany
          : filteredByCompany.filter((product) =>
              product.color.includes(colorFilter)
            );
      const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        const cleanedPriceStr = priceStr.replace("$", "").replace(",", "");
        return parseFloat(cleanedPriceStr);
      };

      const filteredByPrice = filteredByColor.filter((product) => {
        const productPrice = parsePrice(product.price);

        if (minPrice && maxPrice) {
          return productPrice >= minPrice && productPrice <= maxPrice;
        } else if (minPrice) {
          return productPrice >= minPrice;
        } else if (maxPrice) {
          return productPrice <= maxPrice;
        } else {
          return true;
        }
      });

      setFilteredProducts(filteredByPrice);
    };

    filter();
  }, [
    searchQuery,
    categoryFilter,
    products,
    colorFilter,
    companyFilter,
    minPrice,
    maxPrice,
  ]);

  return {
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
  };
}

export default FilterProducts;
