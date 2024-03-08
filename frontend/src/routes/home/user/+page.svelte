<script>
    import Cars from "../../../lib/components/Cars.svelte";
    import { allCars } from "../../../lib/stores/allcars";
    export let data;
    
   

</script>

<div class=" flex justify-center items-center h-screen overflow-auto pb-32 pt-10">
   
  <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 my-auto mx-auto">
      
      <!-- Content goes here -->
      <Cars cars={$allCars} />
    </div>
  </div>
  
