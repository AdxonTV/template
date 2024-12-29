"use client"
import React, { useState } from "react";

function About() {
  const words = ["taper", "fade", "low"];
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const checkWord = () => {
    if (words.includes(inputText.toLowerCase())) {
      setResult("Match found!");
    } else {
      setResult("No match found.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Word Match Checker</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a word"
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <button onClick={checkWord} style={{ marginLeft: "10px", padding: "5px 10px" }}>
        Check
      </button>
      <p>{result}</p>
    </div>
  );
}

export default About;
