import { FaArrowRight, FaBeer, FaSearch } from "react-icons/fa";
import boy from '../../Asset/image 5.png';
import './Explore.css';
 const Explore = () => {
    return (
      <div className=" relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full   lg:max-w-screen-xl">
     
        <div className="max-w-xl mx-auto lg:max-w-screen-xl  ">
          <div className="mb-16 lg:max-w-lg lg:mb-0 ">
            <div className="max-w-xl mb-6">
             
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none title">
              Explore your
              
                <span className="inline-block text-deep-purple-accent-400">
                  favourite city's food
                </span>
              </h2>
              <p className="text-base text-gray-400 md:text-lg">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae laborum assumenda optio saepe perspiciatis quae unde similique quod numquam
              </p>
            </div>
            <div className="flex items-center ">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded-3xl bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none explore "
              >
               Explore
               <FaArrowRight className="pl-2 w-6"></FaArrowRight>
              </a>
             
            </div>
         
          </div>
        </div>
    
        <div className=" mt-10 h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end exploreBg ">
          <img
            src={boy}
            className=" lg:mt-24  h-full w-4/5  max-w-xl -mb-16  lg:ml-64 xl:ml-8  lg:h-auto lg:max-w-screen-md "
            alt=""
          />
        </div>

      </div>
    );
  };
  export default Explore;