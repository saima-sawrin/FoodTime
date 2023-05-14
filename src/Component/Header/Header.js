import React, { useState } from 'react';
import logo from '../../Asset/logo.png';
import { FaCircle, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";

import './Header.css';
import { Link } from 'react-router-dom';

     const Header = () => {
                    const [isMenuOpen, setIsMenuOpen] = useState(false);
                  
                    return (
                    <div className='header  shadow-sm border-2 border-gray-300  '>
                        {/* Navbar Started */}
                          <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className=" flex items-center justify-between nav">
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                        
                             <img src={logo} alt="" className='h-28' />
               
                            
                          </a>
                          <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                              <Link
                                to="/Destination"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                           Home
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                          Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                            About Us
                              </a>
                            </li>
                            <li>
                            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      En
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
   
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="login"
                                title="login"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400
                                btn px-3 py-2 rounded-3xl "
                              >
                               Login
                              </a>
                            </li>
                            <li className='bg-black'>
                            
                         
                            </li>
                            <li className='cart rounded-3xl p-3'>
                             
                                <FaShoppingCart className='text-white'></FaShoppingCart>
                              
                            </li>
                          </ul>
                          <div className="lg:hidden">
                            <button
                              aria-label="Open Menu"
                              title="Open Menu"
                              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                              onClick={() => setIsMenuOpen(true)}
                            >
                              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                              </svg>
                            </button>
                            {isMenuOpen && (
                              <div className="absolute pl-5 top-0 right-0 w-4/7">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <a
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                      >
                                   
                                        <img src={logo} alt="" className='w-24' />
                                       
                                      </a>
                                    </div>
                                    <div>
                                      <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="  lg:flex p-2 -mt-2  transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <nav>
                                    <ul className="space-y-4">
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                        Home
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                         Blog
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Product pricing"
                                          title="Product pricing"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          About Us
                                        </a>
                                      </li>
                                      <li>
                            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      En
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
   
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="login"
                                title="login"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400
                                btn px-3 py-2 rounded-3xl "
                              >
                               Login
                              </a>
                            </li>
                                   
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* NabVar Ended */}
                 
 
    </div>
      );
   };

export default Header;