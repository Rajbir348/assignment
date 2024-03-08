<script>
  import {goto} from "$app/navigation";
  
  export let form;
    import {tempCar} from "$lib/stores/tempCars.js";
    import {enhance} from "$app/forms";
    let car = {
      id: $tempCar._id,
      name: $tempCar.name,
      model: $tempCar.model,
      type: $tempCar.type,
      color: $tempCar.color,
      price: $tempCar.price,
    };
    
    
  </script>
  
  <button class="btn btn-warning"><a href="/home/dealership" target="_self"> Cancel Edit</a></button>
  <div class="w-1/2 mx-auto">

    <h2 class="text-2xl font-semibold text-gray-800 mb-6">
     Edit <span class="text-4xl text-indigo-800">CAR</span>
    </h2>
    <!-- Form -->
    <form for="edit car" method="post" use:enhance={({ formData }) => {
      formData.id=car.id; 
      return async ({ result,update }) => {
        await goto("/home/dealership/");
        if(!alert("Car edited successfully")){
          location.reload();
        };
        
        
		};
      }}>
      <div class="mb-4">
        <input type="hidden" name="id" value={car.id} />
        <label class="block text-md font-bold text-gray-800">Car Name</label>
        <label class="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="name"
            class="grow"
            placeholder="Enter car name"
            required
            value={car.name}
          />
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-md font-bold text-gray-800">Model</label>
        <label class="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="model"
            class="grow"
            placeholder="Enter Car model"
            required
            value={car.model}
          />
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-md font-bold text-gray-800">Type</label>
        <label class="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="type"
            class="grow"
            placeholder="Enter Car Type:SUV, Sedan, Hatchback, etc"
            required
            value={car.type}
          />
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-md font-bold text-gray-800">Color</label>
        <label class="input input-bordered flex items-center gap-2">
          <input
            type="text"
            name="color"
            class="grow w-full"
            placeholder="Enter Car Color"
            required
            value={car.color}
          />
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-md font-bold text-gray-800">Price</label>
        <label class="input input-bordered flex items-center gap-2">
          Rs.
          <input
            type="text"
            name="price"
            class="grow"
            placeholder="2000000"
            required
            value={car.price}
          />
        </label>
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >UPDATE</button>
    </form>
  </div>
  
  