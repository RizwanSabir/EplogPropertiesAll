import { useEffect, useRef, useState } from 'react';

import './index.css'
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../NavBar';




const HeroPropertiesSectionModal = ({ children }) => {

    const screenSize = useCurrentScreenSize(); // Get the current screen size
    const [parentHeight, setParentHeight] = useState('640px');


    useEffect(() => {
        // Update parentHeight based on screenSize
        if (screenSize === '2xl' || screenSize === 'xl') {
            setParentHeight('600px');
        } else if (screenSize === 'lg' || screenSize === 'md') {
            setParentHeight('540px');
        } else if (screenSize === 'sm') {
            setParentHeight('480px');

        } else if (screenSize === 'mdm') {
            setParentHeight('280px');

        }

        else if (screenSize === 'xs') {
            setParentHeight('380px');
        }
        else if (screenSize === 'xxs') {
            setParentHeight('450px');
        }
        else {
            setParentHeight('250px');
        }



    }, [screenSize]); // Runs every time screenSize changes


    const [videoSrc, setVideoSrc] = useState('');


    // Define images based on screen size
    const images = {
        xxs: ["xs1.png", "xs2.png", "xs3.png"],
        xs: ["sm1.png", "sm2.png", "sm3.png"],
        sm: ["sm1.png", "sm2.png", "sm3.png"],
        mdm: ["lg1.png", "lg1.png", "lg1.png"],
        md: ["lg1.png", "lg1.png", "lg1.png"],
        lg: ["lg1.png", "lg2.png", "lg3.png"],
        xl: ["lg1.png", "lg2.png", "lg3.png"],
        "2xl": ["xl1.jpg", "xl2.png", "xl3.png"]
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
        }, 5000);

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
                <div className="relative w-full mt-5 md:mt-0" style={{ height: parentHeight }} >
                    <div className="w-full  mx-auto text-[10px] h-full ">
                        {/* Top Hero Section */}
                        <div className=" flex-col h-[500px] flex">

                            <TopNavigationTabLarge />

                            <AnimatePresence>

                                <motion.div
                                    key={currentImage[1]}
                                    className=" h-screen z-10  w-full absolute "
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0.5, position: "absolute", right: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="absolute hidden md:flex justify-end   w-full z-40 top-[60%] sm:top-[40%] mdm:top-[25%] md:top-[30%]  lg:top-[35%] xl:top-[40%]   p-4" style={{ height: "630px" }}>
                                        <div className="flex flex-col space-y-2">
                                            {currentImages.map((_, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleClick(index)}
                                                    className={`border border-white rounded-full size-[10px] sm:size-[15px] cursor-pointer ${currentImage[1] === index ? 'bg-white' : ""} `}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>


                                    <img className='-z-10 object-contain' src={`/images/${currentImage[0]}`} alt="" />
                                    {/* <img className='-z-10 object-contain' src="http://localhost:5173/images/lg2.png" alt="" /> */}
                                </motion.div>
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


export default HeroPropertiesSectionModal