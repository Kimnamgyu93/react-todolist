import React from "react";
import "./style.css";

export default function Button({ value, handleClick }) {
  return <button onClick={handleClick}>{value}</button>;
}
