

export const load = async (loadData) => {
    const { fetch } = loadData;
   
    const response = await fetch('http://localhost:5000/api/users/vehicles');
    const vehicles = await response.json();
   
    return { data: vehicles};
}