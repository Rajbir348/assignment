<script lang="ts">
    import {goto} from "$app/navigation";
    export let data;
   
</script>
<div class="flex justify-center items-center h-screen">
    <div class="grid grid-cols-1 gap-4">
      <button on:click={ () => goto("/auth/signup")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Signup
      </button>
      <button on:click={ () => goto("/auth/login")} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </div>
  </div>
  