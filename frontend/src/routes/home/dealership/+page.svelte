<script>
    
    import {inventory} from '$lib/stores/inventory';
    import InventoryCars from "$lib/components/InventoryCars.svelte";
    export let data;
    
   
</script>

<div class=" flex justify-center items-center h-screen overflow-auto pt-2 pb-32">
    
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 my-auto mx-auto">
<InventoryCars cars={$inventory} />
    </div>
</div>