<script>
    export let cars;
    import InventoryCar from "./InventoryCar.svelte";
</script>
{#each cars as car}
<InventoryCar {car}/>
{/each}