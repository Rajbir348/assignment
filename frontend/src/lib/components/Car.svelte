<script>

    import { tempCar } from "../stores/tempCars";
    import { goto } from "$app/navigation";
    export let car;
    export let bought=false;
    const handlePurchase = () => {
        tempCar.set(car);
        goto("/home/user/buy");
    };
</script>

<div class="card w-full bg-base-100 glass">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">{car.name}</h2>
    <p>{car.type}| {car.model}</p>
    <div>Price: $ price</div>
    <div class="card-actions justify-end">
      <button id={car._id} class="btn btn-primary " on:click={handlePurchase} disabled={bought}>{bought ? "Purchased" : "Buy"}</button>
    </div>
  </div>
</div>


