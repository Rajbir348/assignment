/** @type {import('./$types').PageLoad} */
import { redirect } from '@sveltejs/kit';
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const car = {
            name: formData.get('name'),
            price: formData.get('price'),
            color: formData.get('color'),
            model: formData.get('model'),
            type: formData.get('type')
        }
           

        const res = await event.fetch('http://localhost:5000/api/dealerships/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        });
        const data = await res.json();
        console.log(data);
        if(res.ok){
            console.log("Car added successfully");
            
            throw redirect(303, '/home/dealership')
        }
    }
}