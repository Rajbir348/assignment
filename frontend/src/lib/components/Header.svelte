<script>
    import { allCars } from '../stores/allcars';    
    export let dealerships;
    let dealershipId;
    const cars=$allCars;
    const handleDealershipClick = async(event) => {
        dealershipId=event.target.id;
        let token=document.cookie;
        console.log(token)
        const res = await fetch(`http://localhost:5000/api/cars/${dealershipId}`);

        const cars=await res.json();
        
        $allCars=cars;
        
    }
    let serchtext;
    const handleInput = () => {
        
            const filteredCars = cars.filter(car => car.name.toLowerCase().includes(serchtext.toLowerCase()));
            $allCars = filteredCars;
        
       
        
    }
    const handleBackspace = (event) => {
        if (event.key === 'Backspace') {
            serchtext = serchtext.slice(0, -1); // Remove the last character
            const filteredCars =cars.filter(car => car.name.toLowerCase().includes(serchtext.toLowerCase()));
            $allCars = filteredCars;
        }
    }
   
   
</script>
<header class="sticky top-0 z-50 ">
    <div class="navbar bg-base-100 mx-auto my-auto w-3/4">
        <div class="flex-1">
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                  
                  <label for="my-drawer" class="btn btn-ghost drawer-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>Dealerships</label>
                </div> 
                <div class="drawer-side">
                  <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                  
                  <ul class="menu p-4 w-80 min-h-full bg-base-200 text-lg overflow-auto overflow-y-scroll">
                    <!-- Sidebar content here -->
                    <li><a class="btn btn-ghost" href="/home/user" target="_self">All CARS</a></li>
                    {#each dealerships as dealer}
                    <li><a id={dealer._id} on:click={handleDealershipClick}>{dealer.dealership_name}</a></li>
                    <hr/>
                    {/each}
                    
                  </ul>
                </div>
              </div> 
        </div>
        <div class="flex-none gap-2">
            <div class="form-control">
                <input
                    on:keypress={handleInput}
                    on:keydown={handleBackspace}
                    type="text"
                    placeholder="Search car Name"
                    bind:value={serchtext}
                    class="input input-bordered w-24 md:w-auto"
                />
            </div>
            <div class="dropdown dropdown-end">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar"
                >
                    <div class="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li><a href="/home/user" target="_self">Home</a></li>
                    <li><a href="/home/user/vehicles" target="_self">My vehicles</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>