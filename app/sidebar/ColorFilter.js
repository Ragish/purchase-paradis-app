//app/sidebar/Colors.js

import React from "react";

function ColorFilter({ onColorSelect }) {
  const colors = ["All", "red", "green", "purple", "black", "yellow"];

  return (
    <div>
      <h5>Color</h5>
      <ul>
        {colors.map((color) => (
          <li key={color} onClick={() => onColorSelect(color)}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorFilter;
