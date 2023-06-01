import React from "react";
import "./App.css";
import images from "./assets/index";

console.log({ images });

console.log({ images, type: typeof images });

function App() {
  return (
    <main className="app">
      {Object.values(images).map((image, index) => {
        return <img src={image} key={index} />;
      })}
    </main>
  );
}

export default App;
