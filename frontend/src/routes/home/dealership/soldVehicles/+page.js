import { inventory } from '../../../../lib/stores/inventory.js';

export const load = async (loadData) => {
    const { fetch } = loadData;
   
    const response = await fetch('http://localhost:5000/api/dealerships/sold-vehicles');
    const vehicles = await response.json();
    inventory.set(vehicles);
    return { data: vehicles};
}