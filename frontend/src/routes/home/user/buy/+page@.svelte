<script>
    import { goto } from "$app/navigation";
    import { tempCar } from "$lib/stores/tempCars.js";
   import { enhance } from "$app/forms";
    const car=$tempCar;
</script>
<div class="card w-1/2 mx-auto bg-base-100 glass">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
    <div class="card-body">
      <h2 class="card-title">{car.name}</h2>
      <p>{car.type}| {car.model}</p>
      <div>Price: $ price</div>
      <div class="card-actions justify-end">
       <form for="purchase" method="post" use:enhance={({ formData }) => {
        formData.append("id",car._id);
        return async ({ result,update }) => {
          await goto("/home/user/");
          if(!alert("Car Purchased successfully")){
            location.reload();
          };
          
          
          };
        }}> <button id={car._id} class="btn btn-primary ">Confirm Purchase</button></form>
      </div>
    </div>
  </div>