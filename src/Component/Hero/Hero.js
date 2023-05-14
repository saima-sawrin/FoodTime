import { FaBeer, FaSearch } from "react-icons/fa";
import meal from '../../Asset/image 2.png';
import './Hero.css';
 const Hero = () => {
    return (
      <div className=" relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full  leaf1 lg:max-w-screen-xl">
     
        <div className="max-w-xl mx-auto lg:max-w-screen-xl  ">
          <div className="mb-16 lg:max-w-lg lg:mb-0 ">
            <div className="max-w-xl mb-6">
             
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none title">
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
            {/* <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div> */}
            <form className="flex justify-content-end items-center w-full mb-4 md:flex-row ">
            <input
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 shadow-sm appearance-none md:mr-2 md:mb-0 rounded-3xl focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none rounded-3xl bg-green-800 "
            >
                <FaSearch className="pr-2 w-8" ></FaSearch>
              Search
            </button>
          </form>
          </div>
        </div>
        <div className="leaf2">
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