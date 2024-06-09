import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {

  const { id, name, image, price } = plant;
  const [inStock, setInStock] = useState(true);  

  function handleButtonClick() {
    setInStock(prevState =>!prevState);
  }

  function handleClick() {
    onDeletePlant(id)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} onClick={handleClick}/>
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleButtonClick}>In Stock</button>
      ) : (
        <button onClick={handleButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
