import React from "react";

function ColorFilter({ onColorSelect }) {
  const colors = ["All", "red", "green", "purple", "black", "yellow"];

  return (
    <div className="filter colorFilter">
      <h5>Color</h5>
      <ul>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            style={{
              backgroundColor: color === "All" ? "inherit" : color,
              color: color === "All" ? "inherit" : "white",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              marginRight: "10px",
              display: "inline-flex",
            }}
          >
            {color === "All" ? color : ""}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default ColorFilter;
