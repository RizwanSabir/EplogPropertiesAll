import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImageWithLoader from '../Loaders/ImageWithLoader';




const SliderComponentBuy = ({ baseUrl, images, PropertyId }) => {
    // Remove duplicates by converting to a Set and then back to an array
    const uniqueImages = [...new Set(images)];
    const [mainImage, setMainImage] = useState(uniqueImages[0]); // Set the initial main image
    const [startIdx, setStartIdx] = useState(0); // To handle visible thumbnails
    const [visibleThumbnails, setVisibleThumbnails] = useState(4); // Default to 4



    // Dynamically update the number of thumbnails based on screen width
    useEffect(() => {
        const updateVisibleThumbnails = () => {
            const width = window.innerWidth;
            if (width < 640) setVisibleThumbnails(2); // Small screens
            else if (width < 768) setVisibleThumbnails(3); // Medium screens
            else setVisibleThumbnails(4); // Large screens
        };

        updateVisibleThumbnails();
        window.addEventListener('resize', updateVisibleThumbnails);
        return () => window.removeEventListener('resize', updateVisibleThumbnails);
    }, []);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const handleNext = () => {
        if (startIdx + visibleThumbnails < uniqueImages.length) setStartIdx(startIdx + 1); // Move forward if there are more images
    };

    const handlePrev = () => {
        if (startIdx > 0) setStartIdx(startIdx - 1); // Move backward if not at the beginning
    };

    return (
        <div className='flex flex-col lg:gap-x-6 mt-2 w-full lg:w-[687px]'>
            {/* Main Picture */}
            <div className='lg:w-[687px]'>
                <div className='relative rounded-3xl overflow-hidden h-full pb-2'>
                    <div className='w-full h-full rounded-2xl overflow-hidden'>
                        <img className='w-full h-full object-cover' src={`${mainImage}`} alt="Main" />
                    </div>
                </div>
            </div>

            {/* Slider Containing Thumbnails */}
            <div className='w-full lg:w-[687px] flex justify-center items-center gap-x-2'>
                {/* Left Arrow */}
                <button onClick={handlePrev} disabled={startIdx === 0} className="disabled:opacity-50">
                    <FaChevronLeft size={24} />
                </button>

                {/* Thumbnails */}
                <div className='flex gap-x-2'>
                    {uniqueImages.slice(startIdx, startIdx + visibleThumbnails).map((image, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleThumbnailClick(image)}
                            className={`cursor-pointer relative w-[100px] overflow-hidden h-full rounded-xl ${
                                mainImage === image ? 'outline-[3px] outline p-[4px] outline-[#82DFDF]' : ''
                            }`}
                        >
                            <div className='w-full h-[70px] rounded-lg overflow-hidden'>
                                <img className='w-full h-full object-cover' src={`${image}`} alt={`Thumbnail ${idx + 1}`} />
                                {/* <ImageWithLoader url={`https://dataapi.pixxicrm.ae/${image}`}/> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button onClick={handleNext} disabled={startIdx + visibleThumbnails >= uniqueImages.length} className="disabled:opacity-50">
                    <FaChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};




export default SliderComponentBuy;
