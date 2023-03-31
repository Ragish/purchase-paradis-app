"use client";

import React, { useState } from "react";

const Sidebar = ({ products, onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <aside className="sidebar w-1/4 bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Products</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </aside>
  );
};

export default Sidebar;
