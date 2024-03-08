import { inventory } from '../../../lib/stores/inventory.js';

export const load = async (loadData) => {
    const {fetch}=loadData;
    const res=await fetch('http://localhost:5000/api/dealerships/inventory');
    const data=await res.json();
    inventory.set(data);
    return {cars:data};
}