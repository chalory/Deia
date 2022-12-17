import { useAuth0 } from "@auth0/auth0-react";


/* eslint-disable */
function Landing() {
  const { loginWithRedirect } = useAuth0();
  
    return (
  <>
  <div class="bg-indigo-700 p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-256.png" width="50" alt="logo000" class="mr-2"/>
      <a href="/" class="inline-block p-2 mr-2 text-indigo-300 hover:text-indigo-100">Home</a>
      <a href="/" class="inline-block p-2 mr-2 text-indigo-300 hover:text-indigo-100">About</a>
    </div>
    
    <div>
      <button onClick={() => loginWithRedirect()} class="inline-block p-2 mr-2 text-indigo-300 hover:text-indigo-100">Login</button>
      <a href='/' class="inline-block py-2 px-4 mr-2 text-yellow-700 bg-yellow-400 rounded hover:bg-yellow-300 hover:bg-text-yellow-800 transition ease-in duration-150">Sign Up</a>
    </div>
  </div>
   
  <div class="md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100">
  
    <div class="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h2 class="text-2xl md:text-4xl lg:text-6xl text-white mb-6">Accesibility Starts with Developers!</h2>
      <p class="mb-6">Let's change how the web is made and create an inclusive space for us all!</p>
  
      <a href="/" class="inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 rounded mr-2">Learn More</a>
      <a href="/" class="inline-block py-3 px-6 text-lg bg-yellow-400 text-yellow-800 hover:bg-yellow-300 rounded">Get Started</a>
    </div>
    
    <div class="w-full md:w-1/2">
      <img src="https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="Photo0" class="w-full rounded shadow-2xl"/>
    </div>
  </div>
  
  <div class="flex py-16 px-10 bg-indigo-800 text-indigo-200 text-center">
    <div class="mr-4 text-center">
      <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="beep" class="w-full rounded mb-4"/>
      <p>Floating camera</p>
    </div>
    <div class="mr-4 text-center">
      <img src="https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="beep" class="w-full rounded mb-4"/>
      <p>Yellow camera</p>
    </div>
    <div class="mr-4 text-center">
      <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="beeeep" class="w-full rounded mb-4"/>
      <p>Hand</p>
    </div>
    <div class="mr-4 text-center">
      <img src="https://images.unsplash.com/photo-1522204538344-922f76ecc041?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" class="w-full rounded mb-4"/>
      <p>Montage</p>
    </div>
  </div>
  
  <div class="flex justify-between p-10 bg-indigo-900 text-indigo-400 items-center">
    <div class="md:w-1/2">
      <h3 class="text-lg mb-2">Join the newsletter</h3>
      <form class="flex">
        <input type="email" class="w-full rounded-l p-4 outline-none focus:bg-indigio-200"/>
        <button class="bg-red-300 hover:bg-red-500 text-red-800 rounded-r px-4">Join</button>
      </form>
    </div>
    
    <div>
      Copyright bla bla bla - Infinity &amp beyond
    </div>
  </div>
      
      </>
    );
  }
  
  export default Landing;
  