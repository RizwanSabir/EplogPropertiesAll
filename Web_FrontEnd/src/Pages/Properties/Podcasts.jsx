import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Move the services array outside the component
const services = [
    {
        id: '01',
        title: 'Buying, Selling & Leasing Properties',
        description1: 'At Eplog Properties, we offer comprehensive services for buying, selling, and leasing properties in Dubai.',
        description2: 'Whether you’re looking to purchase your dream home, sell your existing property, or find a suitable rental, our experienced team is here to assist you.',
        image: 'https:https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg-1.svg',
        alt: 'Step 1',
        link: 'https://eplogproperties.com/contact-us/',
        linkText: 'Browse Properties'
    },
    {
        id: '02',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '03',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '04',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '05',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    {
        id: '06',
        title: 'Property Management',
        description1: 'We offer top-notch property management services to ensure your property is well-maintained.',
        description2: 'From tenant management to maintenance, our team is ready to manage all aspects of your property.',
        image: 'https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg',
        alt: 'Step 2',
        link: 'https://eplogproperties.com/property-management/',
        linkText: 'Learn More'
    },
    // Add more services as needed
];

const Podcasts = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index); // Toggle the accordion
    };

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.matchMedia('(min-width: 768px)').matches; // Adjust the breakpoint as needed
            if (isLargeScreen) {
                setOpenAccordion(Array.from(services.keys())); // Open all accordions on large screens
            } else {
                setOpenAccordion(null); // Close all accordions on small screens
            }
        };

        handleResize(); // Call on mount
        window.addEventListener('resize', handleResize); // Add listener for screen resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup the listener on unmount
    }, []); // No dependencies, so it only runs once on mount/unmount


    return (
        <>

            <div className="max-w-[1140px]  mx-auto">
                <div className=" flex justify-between items-center mt-10">
                    <div className="w-full flex items-center justify-center gap-10 ">
                        <h1 className="section-title-small   text-center text-[20px] md:text-[40px]">
                            Podcasts
                        </h1>

                        <div className="line hidden md:flex">
                            <img
                                src="/Media/dashed-line.svg"
                                className="w-full"
                                alt="dashed-line"
                            />
                        </div>
                        {/* <a
                                href="https://eplogproperties.com/properties/"
                                className=" w-[150px]  text-[16px] font-bold leading-[19.23px]  btn-primary text-center py-2 bg-blue-500 text-white py-1 px-2 rounded-[14px]"
                            >
                                View All
                            </a> */}

                        <div>
                            <div className="bg-[#82DFDF] text-white w-[200px] h-[50px] rounded-full mx-auto flex justify-center gap-x-3 items-center ">
                                <p className='text-[16px] font-bold leading-[19.23px] '>Explore More</p>
                                <div className="bg-white text-black  size-[35px] rounded-full  flex justify-center items-center " >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <BlogSection />
            </div>
        </>
    );
};




// Example array of blog data
const blogData = [
    {
        id: 1,
        title: "IMPZ Production City",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Discover the creative hub in Dubai.", // Small text description
    },
    {
        id: 2,
        title: "Business Bay",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Explore the heart of Dubai's business district.",
    },
    {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
    },
    {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
    },
    {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
    },
    {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
    },
    {
        id: 3,
        title: "Dubai Marina",
        imgSrc: "https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2023/12/25/6b58a5d2-a3f0-46eb-9d83-0d003c0574d6.jpg",
        link: "#",
        description: "Enjoy waterfront living in Dubai Marina.",
    },
    // Add more blog entries here
];

const BlogSection = () => {
    const sliderRef = useRef(null);
    const [expanded, setExpanded] = useState({});

    const toggleDescription = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleMouseDown = (e) => {
        sliderRef.current.isDown = true;
        sliderRef.current.startX = e.pageX - sliderRef.current.offsetLeft;
        sliderRef.current.scrollLeft = sliderRef.current.scrollLeft;
    };

    const handleMouseLeaveOrUp = () => {
        sliderRef.current.isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!sliderRef.current.isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - sliderRef.current.startX) * 0.5;
        sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - walk;
    };

    // Helper function to truncate combined title and description to 20 characters
    const truncateCombinedText = (title, description, limit = 80) => {
        const combinedText = `${title} ${description}`;
        return combinedText.length > limit ? `${combinedText.slice(0, limit)}...` : combinedText;
    };

    return (
        <section className="mt-5 swiper-container-horizontal sm:px-0">
            <div className="w-[85%] md:w-full sm:ml-[100px]">
                <div
                    ref={sliderRef}
                    className="overflow-x-auto flex space-x-5 w-full pb-10"
                    style={{ scrollbarWidth: "none" }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                >
                    {blogData.map((blog) => (
                        <div
                            key={blog.id}
                            className="ml-2 sm:ml-10 flex flex-shrink-0 sm:w-[272px] bg-transparent"
                        >
                            <a href={blog.link}>

                                <div className="shadow-[5px_4px_44px_#00000017] h-full rounded-2xl">
                                    <div className='relative   '>



                                        <div className='size-[60px] bg-white absolute rounded-full left-[40%] top-[30%]'>

                                            {/* <div className='relative'>

                                                <motion.div className='absolute size-[80px] borderRed  rounded-full'>


                                                </motion.div>
                                            </div> */}
                                            <img className='size-[60px] absolute' src="/Media/PlayButton.svg" alt="" />
                                        </div>
                                        <img
                                            src={blog.imgSrc}
                                            className="w-full"
                                            alt={blog.title}
                                        />
                                    </div>
                                    <div className="blog-detail text-center p-4  ">
                                        <h3 className="font-bold leading-[25px]">{blog.title}</h3>
                                        <p className={`text-sm text-gray-500 pt-1  ${expanded[blog.id] ? "" : "line-clamp-2"}`}>
                                            {expanded[blog.id]
                                                ? blog.description
                                                : truncateCombinedText(blog.title, blog.description)}
                                        </p>
                                        <button
                                            className="text-[#7C3EFF] text-xs mt-1"
                                            onClick={() => toggleDescription(blog.id)}
                                        >
                                            {expanded[blog.id] ? "Show Less" : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Podcasts;
