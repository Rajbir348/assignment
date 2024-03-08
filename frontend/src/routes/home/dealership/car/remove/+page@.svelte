<script>
import {tempCar} from "$lib/stores/tempCars.js";
import {enhance} from "$app/forms";
import {goto} from "$app/navigation";
const carId=$tempCar._id;
</script>
<div>
<div class="card w-1/2 mx-auto bg-base-100 glass">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
    <div class="card-body">
      <h2 class="card-title">{$tempCar.name}</h2>
      <p>{$tempCar.type}| {$tempCar.model}</p>
      <div>Price:{$tempCar.price}</div>
      <div class="card-actions justify-end">
        <p class="text-red-500">Are you sure you want to delete this car?<a class=" text-blue-700" href="/home/dealership" target="_self">Return Home</a></p>
        <form method="post" use:enhance={({ formData }) => {
            formData.append("id",carId); 
            return async ({ result,update }) => {
              await goto("/home/dealership/");
              if(!alert("Car deleted successfully")){
                location.reload();
              };
              
              
              };
            }} ><button class="btn btn-error">Delete Permanently!</button></form>
      </div>
    </div>
  </div>

</div>