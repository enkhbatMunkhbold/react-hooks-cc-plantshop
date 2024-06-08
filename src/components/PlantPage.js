import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plants, setPlants ] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
     .then((res) => res.json())
     .then((plants) => setPlants(plants));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleSearchPlant(search) {
    const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredPlants(filteredPlants);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearchPlant={handleSearchPlant}/>
      <PlantList plants={filteredPlants.length === 0 ? plants : filteredPlants}/>
    </main>
  );
}

export default PlantPage;
