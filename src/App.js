import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  Italian: [
    { name: "Pizza", rating: "4/5" },
    { name: "Pasta", rating: "3.5/5" },
    { name: "Tiramisu", rating: "2.5/5" }
  ],
  Indian: [
    { name: "Pav Bhaji", rating: "4.5/5" },
    { name: "Chole Bhature", rating: "5/5" },
    { name: "Shev Bhaji", rating: "5/5" }
  ],
  Chinese: [
    { name: "Noodles", rating: "5/5" },
    { name: "Hot and Sour Soup", rating: "3.5/5" },
    { name: "Spring Rolls", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Italian");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🍔 goodFood</h1>

      <p style={{ padding: "1%", fontSize: "smaller" }}>
        Check out my ratings for different kinds of food. Select a genre to get
        started
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "rgb(210, 170, 118)"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #45423fd8",
                width: "50%",
                margin: "1% 72.5%",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name}</div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}