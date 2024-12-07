import { useEffect, useRef, useState } from 'react';

import './index.css'
import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './SearchBar';
import { NavBarProvider, useNavBar } from '../../Context/NavBarContext';
import HeroPropertiesSectionModal from '../Hero/HeroSectionModal';

const HeroPropertiesSection = () => {
    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;

    return (<>
        <HeroPropertiesSectionModal>
            <div className='w-full  text-center mt-32 sm:mt-52 mdm:mt-10   z-20'>
                <h1 className="    font-bold text-[20px] sm:text-2xl mdm:text-3xl  md:text-4xl   lg:text-4xl  xl:text-5xl tracking-tight word-spacing-[1px] text-white">
                    Your Trusted   Source  for Real  <br className=" block" />
                    Estate Excellence  in Dubai <br className="block" />

                </h1>
                {/* Search Bar Open  */}
                <NavBarProvider>
                    <NavBar />
                    <SearchBar />
                </NavBarProvider>

            </div>

            {/* Hero Boxes */}
            <div className="hidden lg:flex    book-section z-10 mb-0  absolute bottom-0">
                <div className="booking-box w-[190px] h-[100px]">
                    <img src="/Svg/calender-icon.svg" width="40" className="mr-2 hidden  lg:block" />
                    <p className="mb-0">
                        <a href={`${url}/contact-us/`} className="text-white">
                            Book Free<br />Consultation
                        </a>
                    </p>
                </div>
                <div className="booking-box w-[190px] h-[100px]  md:p-[5px]  flex items-center ml-4 ">
                    <p className="mb-0">
                        <a href={`${url}/properties/`} className="text-white">
                            Find your next <br />home in Dubai
                        </a>
                    </p>
                    <img className="hidden lg:block" src="/Svg/home-icon.svg" width="60" />
                </div>
            </div>

        </HeroPropertiesSectionModal>

    </>)
}

const NavBar = () => {
    const { User, setUser } = useNavBar();

    let users = [['New Projects', 'NEW'], ['Buy', 'BUY'], ['Rent', 'RENT']]

    return (
        <>

            <div className="flex  flex-row justify-center mt-5 text-[7px] leading-[15px] sm:leading-[30px] sm:text-[12px] w-[130px] xs:w-[150px] sm:w-[250px] mx-auto bg-white rounded-full z-40 ">
                <div className="flex flex-row bgColor py-[2px] sm:py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="underline" ></motion.div>
                                    </WhiteBackground>
                                    ) : <WhiteBackground key={user} user={user} setUser={setUser} />

                            );
                        })
                    }
                </div>
            </div>


        </>
    )
}

const WhiteBackground = ({ user, setUser, children }) => {
    return (
        <motion.div key={user} onMouseEnter={() => { setUser(user) }} className={`poppins-regular px-2 sm:px-4 py-1   relative z-30 cursor-pointer`}>
            <h1 >{user[0]}</h1>
            {children}
        </motion.div>
    );
};

export default HeroPropertiesSection;
