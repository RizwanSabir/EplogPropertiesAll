import { useEffect, useRef, useState } from 'react';

import './index.css'
import Navbar from '../NavBar';
const HeroCareerSection = ({HeroText}) => {
    const videoRef = useRef(null);
    const [parentHeight, setParentHeight] = useState("520px");
    const [videoSrc, setVideoSrc] = useState('');

    const updateParentHeight = () => {
        if (videoRef.current) {
            const videoHeight = videoRef.current.offsetHeight;
            setParentHeight(videoHeight + 5); // Extra 5px padding
        }
    };

    const updateVideoSource = () => {
        const newSrc = window.innerWidth >= 640
            ? "/Media/Vector-31-1.png"
            : "/Media/Vector-3-1-scaled.jpg";
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
                            <img className='absolute -z-10 w-full' src={videoSrc} ref={videoRef} alt="" />

                            {/* Hero Text */}
                            <div className="w-full    flex flex-col justify-center items-center mdm:justify-start mdm:items-start sm:items-start h-full  mb-[85px] px-3 md:w-7/12 lg:w-7/12 md:pl-9 z-10 sm:mb-6 text-white  lg:mt-10">
                                <h1 className="banner-title text-3xl xs:text-6xl sm:text-4xl xxs:text-5xl  xxs:relative    sm:top-16  sm:static   font-bold     leading-[3.5rem] xl:text-7xl xl:leading-[4rem] tracking-tight word-spacing-[3px]">
                                We are always <br />
                                Hiring!
                                </h1>
                            </div>
                            {/* Bottom for text Marquee */}
                           
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
            <Navbar />
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
            <Navbar />
        </div>

    </>
}
export default HeroCareerSection;
