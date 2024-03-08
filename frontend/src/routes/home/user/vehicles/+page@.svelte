<script>
    import Cars from '$lib/components/Cars.svelte';
 
   
    

    export let data;

    let cars=data.data;

 


    
    
    </script>   

<header>
  <div class="navbar bg-base-100 w-3/4 mx-auto">
      <a class="btn btn-ghost text-xl" href={`/home/user`} target="_self">Home</a>
    </div>
</header>

<div class=" flex justify-center items-center h-screen overflow-auto pt-2 pb-32 pl-2">
  <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 my-auto mx-auto">
      <!-- Content goes here -->
   <Cars {cars} bought={true}/>
    </div>
  </div>