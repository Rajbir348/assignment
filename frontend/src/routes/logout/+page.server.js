/** @type {import('./$types').PageLoad} */
export async function load({cookies}) {
       // Clear JWT cookie
       await cookies.delete('jwt',{path:"/"});

       // Redirect to the login page
      return {message:"Logged Out Successfully",redirect:"/auth/login"}


}