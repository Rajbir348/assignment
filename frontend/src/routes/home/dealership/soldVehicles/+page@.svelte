<script>
  
    import InventoryCars from "$lib/components/inventoryCars.svelte";
    import {inventory} from "$lib/stores/inventory";
    
    export let data;
    
    
</script>

<header>
    <div class="navbar bg-base-100 w-3/4 mx-auto">
        <a class="btn btn-ghost text-xl" href="/home/dealership" target="_self">Home</a>
      </div>
</header>
<div class=" flex justify-center items-center h-screen overflow-auto pt-2 pb-32">
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 my-auto mx-auto">
<InventoryCars cars={$inventory} />
    </div>
</div>    