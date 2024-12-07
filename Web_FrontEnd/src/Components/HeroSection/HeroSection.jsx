import { useEffect, useRef, useState } from 'react';

import './index.css'

import { AnimatePresence, motion } from 'framer-motion';
const HeroSection = ({ HeroText }) => {
    const videoRef = useRef(null);
    const [parentHeight, setParentHeight] = useState("650px");
    const [videoSrc, setVideoSrc] = useState('');

    const images = ["/2.png", "/3.png", "/4.png"];
    const [currentImage, setCurrentImage] = useState([images[0], 0]);

    const handleClick = (index) => {
        setCurrentImage([images[index], index]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                const nextIndex = (prev[1] + 1) % images.length; // cycle through the images
                return [images[nextIndex], nextIndex];
            });
        }, 2000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [images]);


    const updateParentHeight = () => {
        if (videoRef.current) {
            const videoHeight = videoRef.current.offsetHeight;
            setParentHeight(videoHeight + 5); // Extra 5px padding
        }
    };

    const updateVideoSource = () => {
        const newSrc = window.innerWidth >= 640
            ? "/Vector-5-1.mp4"
            : "/Mobile_Lander.mp4";
        setVideoSrc(newSrc);
    };

    useEffect(() => {
        updateVideoSource(); // Set initial video source

        const handleVideoLoad = () => {
            updateParentHeight();
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('loadedmetadata', handleVideoLoad);
        }

        const handleResize = () => {
            updateVideoSource();
            updateParentHeight();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadedmetadata', handleVideoLoad);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="pt-2 text-[14px] px-4 h-fit">
                {/* Top Navigation on Small Screen  */}
                <div className='flex mdm:hidden'>
                    <TopNavigationTab />
                </div>
                {/* Banner section */}
                <div className="relative w-full " style={{ height: parentHeight }} >
                    <div className="w-full px-[10px] mx-auto text-[10px] h-full ">
                        {/* Top Hero Section */}
                        <div className="row h-full flex">
                            <TopNavigationTabLarge />
                            <AnimatePresence>
                                <motion.div
                                    key={currentImage[1]}
                                    className=" h-screen z-10  w-full absolute "
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0.5, position: "absolute" }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute flex justify-end   w-full z-40  top-[40%]   p-4" style={{ height: "630px" }}>
                                        <div className="flex flex-col space-y-2">
                                            {images.map((_, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleClick(index)}
                                                    className={`border border-white rounded-full size-[15px] cursor-pointer ${currentImage[1] === index ? 'bg-white' : ""} `}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                    <img className='-z-10 object-contain' src={`${currentImage[0]}`} alt="" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Hero Text */}
                            <div className="w-full    flex flex-col justify-center items-center mdm:justify-start mdm:items-start sm:items-start h-full  mb-[85px] px-3 md:w-7/12 lg:w-7/12 md:pl-9 z-10 sm:mb-6 text-white  lg:mt-10">
                                <h1 className="banner-title text-3xl xs:text-6xl sm:text-4xl xxs:text-5xl  xxs:relative xxs:-top-16 xs:-top-32  sm:top-16  sm:static   font-bold     leading-[3.5rem] xl:text-7xl xl:leading-[4rem] tracking-tight word-spacing-[3px]">
                                    Your Trusted <br className="hidden md:block" />
                                    Source for Real <br className="block md:hidden" />
                                    Estate Excellence <br className="hidden md:block" />
                                    in Dubai
                                </h1>

                                {/* Buttons */}
                                <div className="mt-12 sm:mt-12 mdm:mt-9 text-[14px] flex flex-col gap-4 sm:flex-row ">
                                    <div>
                                        <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                                            Get In Touch
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="btn border border-white text-white py-2 px-4 rounded hover:border-white hover:text-black hover:bg-white" target="_self">
                                            Learn More
                                        </a>
                                    </div>
                                </div>

                            </div>



                            
                            {/* Hero Boxes */}
                            <div className="hidden md:flex book-section z-40 mb-10">
                                <div className="booking-box flex items-center">
                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/calender-icon.svg" width="40" className="mr-2" />
                                    <p className="mb-0">
                                        <a href="https://eplogproperties.com/contact-us/" className="text-white">
                                            Book Free<br />Consultation
                                        </a>
                                    </p>
                                </div>
                                <div className="booking-box flex items-center ml-4 find-home">
                                    <p className="mb-0">
                                        <a href="https://eplogproperties.com/properties/" className="text-white">
                                            Find your next <br />home in Dubai
                                        </a>
                                    </p>
                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/home-icon.svg" width="60" className="ml-2" />
                                </div>
                            </div>
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
        <div className="col-6 relative pl-5 pb-10 lg:pb-14 sm:pl-9 lg:pt-5 flex items-center">
            <a href="https://eplogproperties.com">
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" className="lg:hidden" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className="  col-6 relative flex justify-end">

        </div>

    </>
}

const TopNavigationTabLarge = () => {
    return <>

        {/* Logo of Brand */}
        <div className="hidden mdm:flex col-6 relative pl-5 pb-10 lg:pb-14 sm:pl-9 lg:pt-5  items-center">
            <a href="https://eplogproperties.com">
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo.svg" width="180" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className=" hidden mdm:flex col-6 relative flex justify-end">

        </div>

    </>
}


export default HeroSection;
