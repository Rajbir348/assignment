/** @type {import('./$types').PageLoad} */

import { redirect } from '@sveltejs/kit';


export const actions = {
    default: async (event) => {

        let car={};
        const formData = await event.request.formData();
       
             car._id= formData.get('id');
             car.name= formData.get('name');
             car.price= formData.get('price');
             car.color= formData.get('color'),
             car.model= formData.get('model');
             car.type= formData.get('type');
        
           console.log(car);

        const res = await event.fetch('http://localhost:5000/api/dealerships/car/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        });
        console.log(res.ok);
        const data = await res.json();
        console.log(data);
        if(res.modifiedCount>0){
            console.log("Car edited successfully");
            
            //retun redirection information

            return redirect(303, '/home/dealership')

            
        }
    }
}