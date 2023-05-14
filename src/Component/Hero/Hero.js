import { FaBeer, FaSearch } from "react-icons/fa";

import meal from '../../Asset/hero.png';
import './Hero.css';
import leaf from '../../Asset/image 3.png';
 const Hero = () => {
    return (
   <div className=" ">
       <div className=" lg:relative px-4 pt-10 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full   lg:max-w-screen-xl">
     
     
     <div className=" max-w-xl mx-auto lg:max-w-screen-xl  ">
      
       <div className="mb-16 lg:max-w-lg lg:mb-0 ">
         <div className="max-w-xl mb-6">
          
           <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none title">
            Order food online
             <br className="hidden md:block" />
             from your favorite{' '}
             <span className="inline-block text-deep-purple-accent-400">
               local restaurants
             </span>
           </h2>
           <p className="text-base text-gray-400 md:text-lg">
            Freshly made food delivered to your door
           </p>
         </div>
     
       
      
<div>
<label for="hs-trailing-button-add-on-with-icon-and-button" class="sr-only">Label</label>
<div class="relative flex rounded-3xl border-2 border-gray-300 ">
 <input type="text" id="hs-trailing-button-add-on-with-icon-and-button " placeholder="    Enter your location"name="hs-trailing-button-add-on-with-icon-and-button" class="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>

<div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">

   <button className="p-4 rounded-3xl bg-orange-500 inline-flex flex-shrink-0 justify-center items-center  border border-transparent font-semibold  focus:z-10 text-white  focus:outline-none focus:ring-2 transition-all text-sm"></button>
 </div>
 <button type="button" class="btn py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-3xl border border-transparent font-semibold  focus:z-10 text-white  focus:outline-none focus:ring-2 transition-all text-sm">
 <FaSearch className="pr-2 w-8" ></FaSearch>Search</button>
</div>
</div>
       </div>
     </div>
   
     <div className=" mt-10 h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end hero ">
       <img
         src={meal}
         className="object-cover object-top h-full w-4/5  max-w-xl -mb-16 rounded lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
         alt=""
       />
     </div>
     </div>
   </div>

    );
  };
  export default Hero;