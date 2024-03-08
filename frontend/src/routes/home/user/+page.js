import { allCars } from '../../../lib/stores/allCars.js';


export const load = async (loadData) => {
    const {fetch}=loadData;
    const res=await fetch('http://localhost:5000/api/cars');
    const data=await res.json();
    allCars.set(data);
   
    return {data:data};
}