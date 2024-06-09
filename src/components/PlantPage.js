import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchPlants, setSearchPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
     .then((res) => res.json())
     .then((plants) => setPlants(plants));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleSearchPlant(search) {
    setSearchPlants(search);
  }

  function handleDeletePlant(deletedPlantId) {
    const updatedPlants = plants.filter(plant => plant.id !== deletedPlantId)
    setPlants(updatedPlants)
  }

  const displayPlants = searchPlants.length !== 0 ? plants.filter(plant => plant.name.toLowerCase().includes(searchPlants.toLowerCase())) : plants

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearchPlant={handleSearchPlant}/>
      <PlantList plants={displayPlants} onDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
