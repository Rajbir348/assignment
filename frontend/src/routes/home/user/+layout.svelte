<script>
    
    export let data;
    
    import Header from "../../../lib/components/Header.svelte";
    const dealerships=data.data;
    
</script>

<Header  {dealerships}/>

<main>
<slot />
</main>
<style>
    
</style>