import { useEffect, useRef, useState } from 'react';

import './index.css'
import { AnimatePresence, motion } from 'framer-motion';

import { NavBarProvider, useNavBar } from '../../Context/NavBarContext';
import Navbar from '../NavBar';




const HeroPropertiesSectionModal2 = ({ children }) => {

    const screenSize = useCurrentScreenSize(); // Get the current screen size




    // Define images based on screen size
    const images = {
        xxs: ["xs1.png"],
        xs: ["sm1.png"],
        sm: ["sm1.png"],
        mdm: ["lg1.png"],
        md: ["lg1.png"],
        lg: ["lg1.png"],
        xl: ["lg1.png"],
        "2xl": ["xl1.jpg"]
    };



    // Set initial images based on current screen size
    const getImagesForScreen = () => {
        if (screenSize === '2xl') return images["2xl"];
        if (screenSize === 'xl') return images.xl;
        if (screenSize === 'lg') return images.lg;
        if (screenSize === 'mdm') return images.lg;
        if (screenSize === 'md') return images.lg;
        if (screenSize === 'sm') return images.sm;
        if (screenSize === 'xs') return images.xs;
        return images.xxs;
    };

    const [currentImages, setCurrentImages] = useState(getImagesForScreen);
    const [currentImage, setCurrentImage] = useState([currentImages[0], 0]);


    useEffect(() => {
        let images = getImagesForScreen()
        setCurrentImages(images);
        setCurrentImage([images[0], 0]); // Reset to the first image for new screen size
    }, [screenSize]);

    const handleClick = (index) => {
        setCurrentImage([currentImages[index], index]);
    };



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                const nextIndex = (prev[1] + 1) % currentImages.length; // cycle through the images
                return [currentImages[nextIndex], nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [currentImages]);






    return (
        <>
            <div className="pt-2 text-[14px] px-4 h-fit">


                {/* Top Navigation on Small Screen  */}
                <div className='flex mdm:hidden'>

                    <TopNavigationTab />

                </div>

                {/* Banner section */}
                <div className="relative w-full mt-5 md:mt-0"  >
                    <div className="w-full  mx-auto text-[10px] h-full ">
                        {/* Top Hero Section */}
                        <div className=" flex-col  flex">

                            <TopNavigationTabLarge />
                            <AnimatePresence>

                                <div
                                    key={currentImage[1]}
                                    className=" h-screen z-10  w-full absolute "
                                    
                                >
                                    {/* <div className="absolute hidden xs:flex justify-end   w-full z-40 top-[60%] sm:top-[40%] mdm:top-[25%] md:top-[30%]  lg:top-[35%] xl:top-[40%]   p-4" style={{ height: "630px" }}>
                                        <div className="flex flex-col space-y-2">
                                            {currentImages.map((_, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleClick(index)}
                                                    className={`border border-white rounded-full size-[10px] sm:size-[15px] cursor-pointer ${currentImage[1] === index ? 'bg-white' : ""} `}
                                                ></div>
                                            ))}
                                        </div>
                                    </div> */}


                                    <img className='-z-10 object-contain' src={`/images/${currentImage[0]}`} alt="" />
                                    {/* <img className='-z-10 object-contain' src="http://localhost:5173/images/lg2.png" alt="" /> */}
                                </div>
                            </AnimatePresence>

                            {/* Hero Text */}

                            {children}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const TopNavigationTab = () => {


    return <>

        {/* Logo of Brand */}
        <div className="col-6 relative pl-5  lg:pb-14 sm:pl-9 lg:pt-5 flex items-center">
            <a href="https://eplogproperties.com">
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" className="lg:hidden" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className="  col-6 relative flex justify-end">
            <Navbar />
        </div>

    </>
}
const TopNavigationTabLarge = () => {


    return <>

        <div className=' flex z-40'>
            {/* Logo of Brand */}
            <div className="hidden mdm:flex col-6 relative pl-5   h-[80px] sm:pl-9 mdm:pt-9 md:pt-7 lg:pt-5  ">
                <a href="https://eplogproperties.com">
                    <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo.svg" width="180" alt="" />
                </a>
            </div>

            {/* Nav Bar */}
            <div className=" hidden mdm:flex col-6 relative lg:flex h-[80px] justify-end">
                <Navbar />
            </div>
        </div>

    </>
}


// Define the breakpoints
const breakpoints = {
    xxs: '290px',
    xs: '490px',
    sm: '640px',
    mdm: '768px',
    md: '900px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

// Custom hook to get the current screen size
const useCurrentScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        const mediaQueries = Object.keys(breakpoints).map((key) => {
            const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[key]})`);
            const handleChange = () => setScreenSize(getScreenSize());
            mediaQuery.addListener(handleChange);
            return { key, mediaQuery, handleChange };
        });

        // Cleanup function to remove event listeners
        return () => {
            mediaQueries.forEach(({ mediaQuery, handleChange }) => {
                mediaQuery.removeListener(handleChange);
            });
        };
    }, []);

    return screenSize;
};

// Helper function to get the current screen size
const getScreenSize = () => {
    const width = window.innerWidth;
    if (width >= parseInt(breakpoints['2xl'])) return '2xl';
    if (width >= parseInt(breakpoints.xl)) return 'xl';
    if (width >= parseInt(breakpoints.lg)) return 'lg';
    if (width >= parseInt(breakpoints.md)) return 'md';
    if (width >= parseInt(breakpoints.mdm)) return 'mdm';
    if (width >= parseInt(breakpoints.sm)) return 'sm';
    if (width >= parseInt(breakpoints.xs)) return 'xs';
    if (width >= parseInt(breakpoints.xxs)) return 'xxs';
    return 'base';
};


export default HeroPropertiesSectionModal2