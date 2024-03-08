import { redirect } from "@sveltejs/kit";
export async function load({cookies}) {
    const userType=cookies.get('userType');

    if(userType === 'user'){
        throw redirect(303, '/home/user');
    }else if(userType === 'dealership'){
        throw redirect(303, '/home/dealership');
    }
}