<script>
export let form;
</script>
<div role="tablist" class="tabs tabs-lifted w-1/2">
    <input type="radio" name="my_tabs_2" role="tab" class="tab text-lg" aria-label="User" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
        
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">Login as <span class="text-blue-500">User</span></h2>
              <!-- Form -->
              <form  for="login User" method="post" action="?/loginUser">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Username</label>
                  <label class="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" name="email" class="grow" placeholder="Username" required/>
                  </label>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Password</label>
                  <label class="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                    <input type="password" name="password" class="grow" placeholder="Password" required/>
                  </label>
                </div>
                <!-- <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <input type="checkbox" class="text-indigo-600 focus:ring-indigo-500 rounded">
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                  </div>
                  <div class="text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div> -->
                <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Login</button>
              </form>
              <!-- End Form -->
              <div class="mt-4 text-sm text-center">
                <span class="text-gray-600">Don't have an account?</span>
                <a href="#" class="text-indigo-600 hover:text-indigo-500 ml-1">Sign up</a>
              </div>
           
    </div>
  
    <input type="radio" name="my_tabs_2" role="tab" class="tab text-lg" aria-label="Dealership" checked />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
        
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">Login as <span class="text-blue-500">Dealership</span></h2>
              <!-- Form -->
              <form for="login Dealership" method="post" action="?/loginDealership">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Username</label>
                  <label class="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" name="email" class="grow" placeholder="Username" required/>
                  </label>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700">Password</label>
                  <label class="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                    <input type="password"  name="password" class="grow" placeholder="password" required/>
                  </label>
                </div>
                <!-- <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <input type="checkbox" class="text-indigo-600 focus:ring-indigo-500 rounded">
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                  </div>
                  <div class="text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div> -->
                <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Login</button>
              </form>
              <!-- End Form -->
              <div class="mt-4 text-sm text-center">
                <span class="text-gray-600">Don't have an account?</span>
                <a href="/auth/signup" class="text-indigo-600 hover:text-indigo-500 ml-1">Sign up</a>
              </div>
          

    </div>
  
    
  </div>