import React from "react";

const Sidebar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <aside className="sidebar w-1/4 bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Products</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </aside>
  );
};

export default Sidebar;
