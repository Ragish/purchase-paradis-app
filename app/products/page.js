import React from "react";
import ProductListing from "./ProductListing";
import Sidebar from "../sidebar/Sidebar";
import FilteredProducts from "../sidebar/FilterProducts";

export default function page() {
  return (
    <div>
      <Sidebar />
      <ProductListing />
    </div>
  );
}
