import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  // GET all plants when the page first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          console.log("fetch request failed");
        }
      })
      .then((plantsData) => setPlants(plantsData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
