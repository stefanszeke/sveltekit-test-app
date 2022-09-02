import { writable } from "svelte/store";
import { plantsList } from "./plantsList";

export const plants = writable(plantsList);

// fetch data from API example
const getPlants = async() => {
  const res = await fetch('http://localhost:3006/plants');
  const data = await res.json();
  
  plants.set(data);
}

// getPlants();


