import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setInStock] = useState(true);

  function handleButtonClick() {
    setInStock(prevState =>!prevState);
  }

  function handleChangePrice(event) {
    console.log(event.target.textContent);
  }

  function handleClick(event) {
    const item = event.target === <img /> ? event.target.parentNode : event.target;;
    console.log(item);
  }

  return (
    <li className="card" data-testid="plant-item" onClick={handleClick}>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p onClick={handleChangePrice}>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleButtonClick}>In Stock</button>
      ) : (
        <button onClick={handleButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
