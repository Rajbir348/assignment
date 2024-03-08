import { redirect } from "@sveltejs/kit";

export const actions = {
    registerDealership: async ({ request, cookies}) => {
        
        const data = await request.formData();
        
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');
        const name = data.get('name');
        const description = data.get('description');
        const location = data.get('location');
        if(password.length < 8){
            return {
                message: "Password must be at least 8 characters long",
            }
        }
        if(password!== confirmPassword){
            return {
                message: "Passwords do not match",
            }
        }
        
        const res = await fetch('http://localhost:5000/api/auth/signup/dealership', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, name, location,dealershipInfo:{description}})                                                        
        })
        

        const data2 = await res.json();

        if(res.ok){
            
            await cookies.delete('jwt',{path:'/'});
            await cookies.delete('userType',{path:'/'});
            await cookies.set('userType', 'dealership',{
                path:'/',
                maxAge:60*60*24
            })
            cookies.set('jwt', data2.token,{
                path:'/',
                maxAge:60*60*24
            });
           
            throw redirect(303, '/home/dealership')
        }
    },
    registerUser: async ({ request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');
        const first_name = data.get('first_name');

        const last_name = data.get('last_name');
        const age= data.get('age');
        const location = data.get('location');
        
        if(password.length < 8){
            return {
                message: "Password must be at least 8 characters long",
            }
        }
        if(password!== confirmPassword){
            return {
                message: "Passwords do not match",
            }
        }
        
        const res = await fetch('http://localhost:5000/api/auth/signup/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password,location,userInfo:{first_name, last_name, age}})
        })
        
        
        const data2 = await res.json();
        
        
        if(res.ok){
            
            await cookies.delete('jwt',{path:'/'});
            await cookies.delete('userType',{path:'/'});
            await cookies.set('userType', 'user',{
                path:'/',
                maxAge:60*60*24
            })
            cookies.set('jwt', data2.token,{
                path:'/'
            });
           
            throw redirect(303, '/home/user')
        }
    }
    
}        
