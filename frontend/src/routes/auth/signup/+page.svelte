<script>
    export let form;
    </script>
    <div role="tablist" class="tabs tabs-lifted w-1/2">
        <input type="radio" name="my_tabs_2" role="tab" class="tab text-lg" aria-label="User" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            
                  <h2 class="text-2xl font-semibold text-gray-800 mb-6">Register as <span class="text-blue-500">User</span></h2>
                  <!-- Form -->
                  <form  for="login User" method="post" action="?/registerUser">
                   <div class="flex w-full gap-2">
                    <div class="mb-4 flex-1">
                        <label class="block text-sm font-medium text-gray-700">First Name</label>
                        <label class="input input-bordered flex items-center gap-2">
                          
                          <input type="text" name="first_name" class="grow" placeholder="First Name" required/>
                        </label>
                      </div>
                      <div class="mb-4 flex-1">
                        <label class="block text-sm font-medium text-gray-700">Last Name</label>
                        <label class="input input-bordered flex items-center gap-2">
                         
                          <input type="text" name="last_name" class="grow" placeholder="Last Name" required/>
                        </label>
                      </div>
                   </div>
                   <div class="flex w-full gap-2">
                    <div class="mb-4 flex-2">
                        <label class="block text-sm font-medium text-gray-700">email</label>
                        <label class="input input-bordered flex items-center gap-2">
                          
                          <input type="email" name="email" class="grow" placeholder="xample123@gmail" required/>
                        </label>
                      </div>
                      <div class="mb-4 flex-1">
                        <label class="block text-sm font-medium text-gray-700">Location</label>
                        <label class="input input-bordered flex items-center gap-2">
                         
                          <input type="text" name="location" class="grow" placeholder="Delhi,Mumbai..." required/>
                        </label>
                      </div>
                      <div class="mb-4 flex-1">
                        <label class="block text-sm font-medium text-gray-700">Age</label>
                        <label class="input input-bordered flex items-center gap-2">
                         
                          <input type="number" name="age" class="grow" placeholder="30" required/>Years
                        </label>
                      </div>
                   </div>
                   <div class="flex w-full gap-2">
                    <div class="mb-4 flex-1">
                        <label class="block text-sm font-medium text-gray-700">Password</label>
                        <label class="input input-bordered flex items-center gap-2">
                          
                          <input type="text" name="password" class="grow" placeholder="Password must be at least 8 characters" required/>
                        </label>
                      </div>
                      <div class="mb-4 ">
                        <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <label class="input input-bordered flex items-center gap-2">
                         
                          <input type="password" name="confirmPassword" class="grow" placeholder="password" required/>
                        </label>
                      </div>
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
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Register</button>
                  </form>
                  <!-- End Form -->
                  <div class="mt-4 text-sm text-center">
                    <span class="text-gray-600">Already have an account?</span>
                    <a href="#" class="text-indigo-600 hover:text-indigo-500 ml-1">Login</a>
                  </div>
               
        </div>
      
        <input type="radio" name="my_tabs_2" role="tab" class="tab text-lg" aria-label="Dealership" checked />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
            
                  <h2 class="text-2xl font-semibold text-gray-800 mb-6">Register as <span class="text-blue-500">Dealership</span></h2>
                  <!-- Form -->
                  <form for="login Dealership" method="post" action="?/registerDealership">
                    <div class="flex w-full gap-2">
                        <div class="mb-4 flex-1">
                            <label class="block text-sm font-medium text-gray-700">Dealership Name</label>
                            <label class="input input-bordered flex items-center gap-2">
                              
                              <input type="text" name="name" class="grow" placeholder="Dealership Name" required/>
                            </label>
                          </div>
                          <div class="mb-4 flex-1">
                            <label class="block text-sm font-medium text-gray-700">Email</label>
                            <label class="input input-bordered flex items-center gap-2">
                             
                              <input type="email" name="email" class="grow" placeholder="xample123@gmail" required/>
                            </label>
                          </div>
                       </div>
                       <div class="flex w-full gap-2">
                        <div class="mb-4 flex-2">
                            <label class="block text-sm font-medium text-gray-700">Password</label>
                            <label class="input input-bordered flex items-center gap-2">
                              
                              <input type="password" name="password" class="grow" placeholder="password must be at least 8 characters" required/>
                            </label>
                          </div>
                          <div class="mb-4 flex-1">
                            <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <label class="input input-bordered flex items-center gap-2">
                             
                              <input type="password" name="confirmPassword" class="grow" placeholder="Confirm Password" required/>
                            </label>
                          </div>
                          <div class="mb-4 flex-1">
                            <label class="block text-sm font-medium text-gray-700">Location</label>
                            <label class="input input-bordered flex items-center gap-2">
                             
                              <input type="text" name="location" class="grow" placeholder="Deilhi,Mumbai..." required/>
                            </label>
                          </div>
                       </div>
                       <div class="mb-4 flex-1">
                        <label class="block text-sm font-medium text-gray-700">Description</label>
                        <label class="input input-bordered flex items-center gap-2">
                         
                          <input type="text" name="description" class="grow" placeholder="describe your business" required/>
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
                    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">Register</button>
                  </form>
                  <!-- End Form -->
                  <div class="mt-4 text-sm text-center">
                    <span class="text-gray-600">Already have an account?</span>
                    <a href="/auth/login" class="text-indigo-600 hover:text-indigo-500 ml-1">Login</a>
                  </div>
              
    
        </div>
      
        
      </div>