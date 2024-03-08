<script>
    import Car from "./Car.svelte";
    export let bought;
    export let cars;
</script>
{#each cars as car}
<Car {car} {bought}/>
{/each}