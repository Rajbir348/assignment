<script>
 
</script>
<button class="btn btn-warning"><a href="/home/dealership" target="_self">Return toHome</a></button>
<div class=" w-1/2 mx-auto">
  <h2 class="text-2xl font-semibold text-gray-800 mb-6">
    Add <span class=" text-4xl text-indigo-800">CAR</span>
  </h2>
  <!-- Form -->
  <form for="Add car" method="post" >
    <div class="mb-4">
      <label class="block text-md font-bold text-gray-800">Car Name</label>
      <label class="input input-bordered flex items-center gap-2">
       
        <input
          type="text"
          name="name"
          class="grow"
          placeholder="Enter car name"
          required
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
        />
      </label>
    </div>
    <button
      type="submit"
      class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >ADD</button
    >
  </form>
</div>
<!-- End Form -->

