/** @type {import('@sveltejs/kit').Handle} */

import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    const userType=event.cookies.get('userType');
    
    if (event.url.pathname.startsWith('/home/user')) { 
    
        if(userType !== 'user'){
            throw redirect(303, '/auth/login');
        }
    }else if(event.url.pathname.startsWith('/home/dealership')){
        if(userType !== 'dealership'){
            throw redirect(303, '/auth/login');
        }
    }
    const response = await resolve(event); 
    return response;
}