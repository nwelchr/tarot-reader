import React from "react";
import "./App.css";
import images from "./assets/index";

const imageUrls = Object.values(images);

function CardGenerator() {
  const [card, setCard] = React.useState("");

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomCard = imageUrls[randomIndex];
    setCard(randomCard);
  };

  return (
    <section>
      <img src={card} />
      <button onClick={getRandomCard}>Generate Card</button>
    </section>
  );
}

function App() {
  return (
    <main className="app">
      <CardGenerator />
      {imageUrls.map((image, index) => {
        return <img src={image} key={index} />;
      })}
    </main>
  );
}

export default App;
