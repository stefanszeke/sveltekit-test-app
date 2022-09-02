import { error } from '@sveltejs/kit';
import { plantsList } from '../../store/plantsList';  

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const plant = plantsList.find(plant => plant.name === params.plantName);
  if (!plant) {
    return error(404, 'Not found');
  }
  return plant;
 
}