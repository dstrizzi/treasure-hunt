import React from "react";
import "./styles/square.css";

export default function Square({ value, onClick }) {
  let className = value ? "locked" : "empty";
  if (value === "x") className = "selected";
  if (value === 2) className = "submitted";
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
