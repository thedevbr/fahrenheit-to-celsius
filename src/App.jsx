import React, {useState} from 'react';
import './index.css';

function App() {
  const [value, setValue] = useState(32);
  let novovalor = Math.round(((value - 32) * 5) / 9);
  return (
    <div
      style={{
        boxSizing: "border-box",
        background: "#f0f0f0",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
    
      <section
        style={{
          borderRadius: ".5rem",
          background: "#Fff",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "4rem",
          gap: "1rem",
          boxShadow: "0 0 .2rem .1rem rgba(0, 0, 0,.1)",
        }}
      >
      <h1 style={{color:"#710"}}>Fahrenheit to Celsius convert</h1>
        <h1>Fahrenheit</h1>
        <input
          name="inputOne"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: "100%",
            outline: "none",
            border: "transparent",
            boxShadow: "0 0 .20rem 0 rgba(0, 0, 0, 0.7)",
            padding: ".8rem",
            color: novovalor < 0 ? "red" : "green",
          }}
        />
        <h2>to</h2>
        <h1 style={{ color: "black" }}>Celsius</h1>
        <h2
          style={{
            textAlign: "center",
            color: novovalor < 0 ? "red" : "green",
          }}
        >
          {novovalor}º
        </h2>
      </section>
    </div>
  );
}

export default App;