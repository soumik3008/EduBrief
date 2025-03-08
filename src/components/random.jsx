import React, { useState } from "react";

export default function Random() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomColor() {
    if (type === "hex") {
      // Generate a random hex color
      const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
      setColor(randomHex);
    } else if (type === "rgb") {
      // Generate a random RGB color
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "10px", // Adds spacing between buttons
      }}
    >
      <button
        onClick={() => setType("hex")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Create Hex Color
      </button>
      <button
        onClick={() => setType("rgb")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={RandomColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Generate Random Color
      </button>
    </div>
  );
}
