//app/sidebar/Category.js

import React from "react";

function Category({ onCategorySelect }) {
  const categories = ["All", "office"];

  return (
    <div>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
