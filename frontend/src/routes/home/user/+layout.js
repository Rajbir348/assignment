export const load = async (event) => {
 
    const res=await event.fetch('http://localhost:5000/api/alldealerships');
    const data=await res.json();
   
    
    return {data:data};
}