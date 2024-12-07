                                                                                import { useEffect, useRef, useState } from 'react';
import './index.css'

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../NavBar';
import HeroPropertiesSectionModal from '../Hero/HeroSectionModal';


const HeroAboutSection = ({ HeroText }) => {


    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;

    return (
        <>
            <HeroPropertiesSectionModal>
                {/* Hero Text */}
                <div className="w-full mdm:mt-10      flex flex-col justify-center items-center mdm:justify-start mdm:items-start sm:items-start h-full  mb-[85px] px-3 md:w-7/12 lg:w-7/12 md:pl-9 z-10 sm:mb-6 text-white  lg:mt-20">

                    <div className="  w-full  text-center   font-bold text-[25px] xs:text-[30px] sm:text-2xl mdm:text-3xl  md:text-4xl   lg:text-4xl  xl:text-5xl mdm:leading-[50px]  text-white">
                        <h1 className="flex justify-center mdm:justify-start   mdm:text-left">We are your primary <br className="block" />real estate company <br className="block" />based in Dubai</h1>
                    </div>
                    {/* Buttons */}
                    <div className="mt-12 sm:mt-12 mdm:mt-9 text-[2px] mdm:text-[14px] flex flex-col gap-4 sm:flex-row">
                        <div>
                            <a href={`${url}/contact-us/`} className="bg-primary  btn text-white sm:py-2 sm:px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary hover:outline hover:outline-[1px]" target="_self">
                                Get In Touch
                            </a>
                        </div>
                        <div>
                            <a href={`${url}/contact-us/`} className="btn border border-white text-white sm:py-2 sm:px-4 rounded hover:border-white hover:text-black hover:bg-white" target="_self">
                                Learn More
                            </a>
                        </div>
                    </div>

                </div>

                {/* Hero Boxes */}
                <div className="hidden md:flex book-section  w-full  z-40">
                    <div className=" booking-box w-[45%]     leading-[40px]  text-[35px]">
                        <a href="https://eplogproperties.com/properties/" className="white-text">Buying, Selling &amp;<br />
                            Leasing Properties</a>
                    </div>
                    <i className="fa fa-long-arrow-right"></i>

                </div>
            </HeroPropertiesSectionModal>
        </>
    );
};



export default HeroAboutSection;
