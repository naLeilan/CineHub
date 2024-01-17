import React from "react";

const containerStyle = {
  display: "flex",
  gap: "16px",
  alignItems: "center",
};

const starStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  margin: "0",
  lineHeight: "1",
};

export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
