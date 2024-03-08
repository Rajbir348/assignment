import { redirect } from "@sveltejs/kit";

export const actions = {
    loginUser: async ({ request, cookies}) => {
        
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        if(password.length < 8){
            return {
                message: "Password must be at least 8 characters long",
            }
        }
        
        const res = await fetch('http://localhost:5000/api/auth/login/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        

        const data2 = await res.json();

        if(res.ok){
            await cookies.delete('jwt',{path:'/'});
            await cookies.delete('userType',{path:'/'});
            await cookies.set('userType', 'user',{
                path:'/',
                maxAge:60*60*24
            })
            
            await cookies.set('jwt', data2.token,{
                path:'/',
                maxAge:60*60*24
            });
           
            throw redirect(303, '/home/user')
        }
    },
    loginDealership: async ({ request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        if(password.length < 8){
            return {
                message: "Password must be at least 8 characters long",
            }
        }
        
        const res = await fetch('http://localhost:5000/api/auth/login/dealership', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        
        
        const data2 = await res.json();
       
        if(res.ok){
            await cookies.delete('jwt',{path:'/'});
            await cookies.delete('userType',{path:'/'});
            await cookies.set('userType', 'dealership',{
                path:'/',
                maxAge:60*60*24
            })
            await cookies.set('jwt', data2.token,{
                path:'/',
                maxAge:60*60*24
            });
           
            throw redirect(303, '/home/dealership')
        }
    }
    
}        
