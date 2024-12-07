import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroSearchSection from '../../Components/HeroSearchProperties/HeroSection';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { NavBarProvider, useNavBar } from '../../Context/NavBarContext';
import { PropertyDataProvider } from '../../Context/PropertyDataContext';
import { motion } from 'framer-motion';
import HeroPropertiesSectionModal from '../../Components/Hero/HeroSectionModal';
import HeroPropertiesSectionModal2 from '../../Components/Hero/HeroSectionModal2';
import NewsLetter from '../Footer/NewsLetter';
import Footer from '../Footer/Footer';


const SearchProperties = () => {
  const [searchParams] = useSearchParams();
  const [PropertyUser, setPropertyUser] = useState()

  useEffect(() => {
    // Convert searchParams to a regular object for easier usage
    const queryParams = Object.fromEntries(searchParams.entries());


    // Set user based on listingType in query params
    if (queryParams?.listingType) {
      setPropertyUser(queryParams.listingType);
    }
  }, [searchParams]); // Run this effect when searchParams change

  return (
    <>
      <NavBarProvider>
        <PropertyDataProvider>
          <HeroPropertiesSectionModal2>

            <div className='w-full  text-center mt-16 sm:mt-52 mdm:mt-10   z-20'>
              <HeroText />
              <NavBar />
              <SearchBar />
            </div>
          </HeroPropertiesSectionModal2>
          <HeroSearchSection />
        </PropertyDataProvider>
      </NavBarProvider>
      <NewsLetter />
      <Footer />
    </>
  );
};


const HeroText = () => {
  return (
    <>
      <h1 className="    font-bold text-2xl sm:text-2xl mdm:text-3xl  md:text-4xl   lg:text-4xl  xl:text-5xl tracking-tight word-spacing-[1px] text-white">
        Your Trusted   Source  for Real  <br className=" block" />
        Estate Excellence  in Dubai <br className="block" />
      </h1>
    </>
  )
}




const NavBar = () => {
  const { User, setUser } = useNavBar();
  let users = [['New Projects', 'NEW'], ['Buy', 'BUY'], ['Rent', 'RENT']]

  return (
    <>

      <div className="flex   flex-row justify-center mt-5 text-[8px]  leading-[25px] sm:leading-[30px] sm:text-[12px] w-[200px]  xs:w-[200px] sm:w-[250px] mx-auto  rounded-full z-40 bg-white  ">
        <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
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
    <motion.div key={user} onMouseEnter={() => { setUser(user) }} className={`poppins-regular px-4 py-1   relative z-30 cursor-pointer`}>
      <h1 >{user[0]}</h1>
      {children}
    </motion.div>
  );
};


export default SearchProperties