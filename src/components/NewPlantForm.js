import React, { useState } from "react";

function NewPlantForm({ onAddPlant}) {

  const initialNewPlant = { name: "", image: "", price: 0 }
  const [newPlant, setNewPlant] = useState(initialNewPlant)

  const { name, image, price } = newPlant;

  function handleChange(event) {
    const{ name, value } = event.target;
    setNewPlant({...newPlant, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newPlant)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    }).then(res => res.json())
    .then(plant => onAddPlant(plant));
    setNewPlant(initialNewPlant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
