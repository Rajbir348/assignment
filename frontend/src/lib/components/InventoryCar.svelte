<script>
  import {goto} from "$app/navigation";
import {tempCar} from "$lib/stores/tempCars.js";
  
export let car;
const handleEdit=()=>{
    tempCar.set(car);
    console.log($tempCar);
    goto("/home/dealership/car/edit");
}
const handleRemoval=()=>{
    tempCar.set(car);
    goto("/home/dealership/car/remove");
}
</script>
<div class="card w-full bg-base-100 glass">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
    <div class="card-body">
      <h2 class="card-title">{car.name}</h2>
      <p>{car.type}| {car.model}</p>
      <div>Price:{car.price}</div>
      <div class="card-actions justify-end">
        <button class="btn btn-accent" on:click={handleEdit}>Edit</button><button class="btn btn-error" on:click={handleRemoval}>Remove</button>
      </div>
    </div>
  </div>