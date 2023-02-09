import React from "react";
import "./Button.css";

const button = ({ label, onClick, isDestructive, buttonMargin, width, labelMargin, fontSize }) => {
  return (
    <button
      className={isDestructive ? "button destructive" : "button standard"}
      onClick={onClick}
      style={{margin: buttonMargin, width: width}}
    >
      <div style={{margin: labelMargin}}>
        <p className="body" style={{color: "black", fontWeight: "300", fontSize: fontSize}}>{label}</p>
      </div>
    </button>
  );
};

export default button;
