<script>
    import { inventory } from '$lib/stores/inventory';
    let serchtext = '';
    const cars=$inventory;
    const handleInput = () => {
        const filteredCars = cars.filter(car => car.name.toLowerCase().includes(serchtext.toLowerCase()));
        $inventory = filteredCars;
    }
    
    const handleBackspace = (event) => {
        if (event.key === 'Backspace') {
            serchtext = serchtext.slice(0, -1); // Remove the last character
            const filteredCars =cars.filter(car => car.name.toLowerCase().includes(serchtext.toLowerCase()));
            $inventory = filteredCars;
        }
    }
</script>

<header class="sticky top-0 z-50 ">
    <div class="navbar bg-base-100 mx-auto my-auto w-3/4">
        <div class="flex-1">
            <button class="btn btn-outline btn-accent "><a href="/home/dealership/car/add">Add CAR</a></button>
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
                    <li><a href="/home/dealership" target="_self">Home</a></li>
                    <li><a href="/home/dealership/soldVehicles" target="_self">Sold vehicles</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>
