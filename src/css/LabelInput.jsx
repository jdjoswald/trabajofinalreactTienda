import React from "react";

export default function LabelInput({ name }) {
  return (
    <label
      style={{
        display: "flex",
        color: "black",
        opacity: "30%",
        marginLeft: "6px",
      }}
    >
      {name}
    </label>
  );
}
