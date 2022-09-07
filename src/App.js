import React, {useState} from "react";
import "./styles.css";

export default function App() {
    
  return (
    <div className="App">
      <h1>🍔 goodFood</h1>
      
      <small>Check out my ratings for different kinds of food. Select a 
          genre to get started</small>
      
      <div>
        <button style={{padding:"0.5rem", backgroundColor:"rgb(210, 170, 118)", borderRadius:"0.5rem", width:"7rem", margin: "1rem", cursor:"pointer"}}>Italian</button>
        
        <button style={{padding:"0.5rem", backgroundColor:"rgb(210, 170, 118)", borderRadius:"0.5rem", width:"7rem", margin: "1rem", cursor:"pointer"}}>Indian</button>
        
        <button style={{padding:"0.5rem", backgroundColor:"rgb(210, 170, 118)", borderRadius:"0.5rem", width:"7rem", margin: "1rem", cursor:"pointer"}}>Chinese</button>
        </div>
    </div>
  );
}
