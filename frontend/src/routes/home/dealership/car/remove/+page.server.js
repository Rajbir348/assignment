import { redirect } from '@sveltejs/kit';
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        
        const  carId  = formData.get('id');
        
        const res = await event.fetch(`http://localhost:5000/api/dealerships/car/delete/${carId}`);
        
        const data = await res.json();
        if(data.deletedCount>0){
           return redirect(303, '/home/dealership')
        }

    }

}