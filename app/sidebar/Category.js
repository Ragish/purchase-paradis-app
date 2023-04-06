//app/sidebar/Category.js

import React from "react";

function Category({ onCategorySelect }) {
  const categories = ["All", "office"];

  return (
    <div>
      <h5>Category</h5>
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
