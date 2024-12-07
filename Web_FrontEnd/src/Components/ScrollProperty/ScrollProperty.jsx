

import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import CustomLoader from "../Loaders/CustomLoader";
import { div } from "framer-motion/client";



const ScrollProperty = ({ Page, Image = { default: false } }) => {
    const [Properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    let [User, setUser] = useState(['New Projects', 'NEW']);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const PropertyList = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/v1/properties/Eplog Properties', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                    body: JSON.stringify({
                        listingType: User[1],
                        size: 10,
                        page: Page
                    })
                });
                const DevelopersData = await PropertyList.json();

                setProperties(() => [
                    ...DevelopersData.data.list
                ]);
            } catch (error) {
                console.error("Error fetching developers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [User, Page]); // Add `User` and `page` as dependencies


    const handleClickItem = (propertyId, Type, DeveloperLogo) => {

        navigate(`/property/${Type}?propertyId=${propertyId}&dl=${DeveloperLogo}`);
    };

    return (
        <div className="pt-2 text-[12px] sm:text-[14px] h-fit max-w-[1140px]  mx-auto ">
            <div>
            </div>

            {loading && !Properties.length ? (
                <div className='mt-10'>
                    <CustomLoader />
                </div>
            ) : (
                <>
                    {User[1] === "NEW"
                        ? <PropertyListingNEW Type={User[1]} properties={Properties} handleClickItem={handleClickItem} User={User} setUser={setUser} Image={Image} />
                        : <PropertyListingRENT Type={User[1]} properties={Properties} handleClickItem={handleClickItem} User={User} setUser={setUser} Image={Image} />
                    }
                </>
            )}
        </div>
    );
};


const PropertyListingNEW = ({ properties, handleClickItem, Type, User, setUser, Image }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const formatPrice = (price) => {
        if (price >= 1_000_000) return `${(price / 1_000_000).toFixed(2)} M`;
        if (price >= 1_000) return `${(price / 1_000).toFixed(2)} K`;
        return `${price.toFixed(2)}`;
    };

    const handleNext = () => {
        if (currentIndex < properties.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' }); // Adjust scroll distance if needed
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row space-y-3 justify-center items-center md:justify-between">

                <div className="shrink-0 ">
                    <NavBar User={User} setUser={setUser} Image={Image} />

                </div>
                {Image?.default && <div className="line hidden md:flex ">
                    <img
                        src="/Svg/dashed-line-black.svg"
                        className="px-10 hidden md:flex"
                        alt="dashed-line"
                    />
                </div>}


                <div className={` flex ${Image?.default ? 'text-white' : 'text-black'} gap-x-4 justify-center md:justify-end`}>
                    <div className={`border ${Image?.default ? 'border-white' : 'border-black'} size-[50px] rounded-full flex justify-center items-center text-black cursor-pointer" onClick={handleBack}`}
                        onClick={handleBack}
                        disabled={currentIndex === 0}>
                        <i className={`fa-solid ${Image?.default ? 'text-white' : 'text-black'}  fa-chevron-left`}></i>
                    </div>
                    <div
                        className={`border ${Image?.default ? 'border-white' : 'border-black'} size-[50px] rounded-full flex justify-center items-center text-black cursor-pointer" onClick={handleBack}`}

                        onClick={handleNext}
                        disabled={currentIndex === properties.length - 1}>
                        <i className={`fa-solid ${Image?.default ? 'text-white' : 'text-black'} fa-chevron-right`}></i>
                    </div>


                </div>
            </div>
            <div className="relative">
                <div
                    className="md:ml-[100px] mt-[20px] overflow-x-scroll flex scrollbar-hide"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="flex space-x-2 sm:space-x-5">
                        {properties.map((property, index) => (
                            <div
                                onClick={() => handleClickItem(property.propertyId, Type.toLowerCase(), property.developerLogo)}
                                key={index}
                                className="rounded-3xl shadow-[5px_4px_44px_#00000017] w-[210px] sm:w-[272px] bg-white overflow-hidden cursor-pointer mb-9 relative"
                            >
                                <a href={property.link}>
                                    <div className="bg-gray-100">
                                        <img
                                            src={property.photos[0]}
                                            className="w-full object-cover h-[150px]"
                                            alt={property.alt}
                                        />
                                        <div className="px-4">
                                            <div className="mt-2 flex justify-between">
                                                <div>
                                                    <div className="flex">
                                                        <img src="/Svg/Price.svg" alt="" />
                                                        <h5 className="box-title text-lg font-bold flex space-x-1">
                                                            <p className="text-[12px]">AED</p>
                                                            <p>{formatPrice(property.price)}</p>
                                                        </h5>
                                                    </div>
                                                    <div className="leading-4">
                                                        <p className="text-cyan-500 my-2 text-[14px] font-bold">
                                                            {property.title}
                                                        </p>
                                                        <div className="flex">
                                                            <p className="text-cyan-500">{property.developer}</p>
                                                        </div>
                                                        <div className="flex mt-1">
                                                            <img src="/Svg/Location.svg" alt="" />
                                                            <small className="text-gray-500 block">{property.region}</small>
                                                        </div>
                                                    </div>
                                                    <div className="hidden sm:flex">
                                                        <img src="/Svg/Home.svg" alt="" />
                                                        {property.propertyType.map((value, idx) => (
                                                            <div key={idx}>
                                                                {value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}
                                                                {idx < property.propertyType.length - 1 && <span>, </span>}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="w-[70px] flex justify-end">
                                                    <img
                                                        src={property.developerLogo}
                                                        className="size-[50px] object-cover rounded-xl outline outline-[1px] p-1"
                                                        alt={property.alt}
                                                    />
                                                </div>
                                            </div>
                                            <div className="line my-2 border-b"></div>
                                            <div className="property-data flex justify-between text-sm sm:pb-5">
                                                <div className="bed flex items-center gap-x-2 text-center">
                                                    <img
                                                        src="/Svg/bed-icon.svg"
                                                        width="15"
                                                        alt="bed"
                                                    />
                                                    <p>{property.newParam?.bedroomMin}-{property.newParam?.bedroomMax} Beds</p>
                                                </div>
                                                <div className="area flex items-center gap-x-2 text-center">
                                                    <img
                                                        src="/Svg/compress-icon.svg"
                                                        width="15"
                                                        alt="area"
                                                    />
                                                    <p>{property.newParam?.maxSize} - {property.newParam?.minSize} SQM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};


const PropertyListingRENT = ({ properties, handleClickItem, Type, User, setUser, Image }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleNext = () => {
        if (currentIndex < properties.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' }); // Adjust scroll distance if needed
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        }
    };

    const TypeProperty = Type === "SELL" ? "buy" : "rent"
    const DEveloperLogo = properties.listingType === "SELL" ? "buy" : "rent"
    const formatPrice = (price) => {
        if (price >= 1_000_000) {
            // Round off to millions with two decimal places
            return `${(price / 1_000_000).toFixed(2)} M`;
        } else if (price >= 1_000) {
            // Round off to thousands with two decimal places
            return `${(price / 1_000).toFixed(2)} K`;
        } else {
            return `${price.toFixed(2)}`; // Return the price as is if it's less than 1,000 with two decimal places
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="shrink-0">
                    <NavBar User={User} setUser={setUser} Image={Image} />

                </div>
                {Image?.default && <div className="line hidden md:flex ">
                    <img
                        src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                        className="px-10"
                        alt="dashed-line"
                    />
                </div>}

                <div className={` flex ${Image?.default ? 'text-white' : 'text-black'} gap-x-4 justify-center md:justify-end`}>
                    <div className={`border ${Image?.default ? 'border-white' : 'border-black'} size-[50px] rounded-full flex justify-center items-center text-black cursor-pointer" onClick={handleBack}`}
                        disabled={currentIndex === 0}>
                        <i className={`fa-solid ${Image?.default ? 'text-white' : 'text-black'}  fa-chevron-left`}></i>
                    </div>
                    <div
                        className={`border ${Image?.default ? 'border-white' : 'border-black'} size-[50px] rounded-full flex justify-center items-center text-black cursor-pointer" onClick={handleBack}`}

                        onClick={handleNext}
                        disabled={currentIndex === properties.length - 1}>
                        <i className={`fa-solid ${Image?.default ? 'text-white' : 'text-black'} fa-chevron-right`}></i>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="md:ml-[100px] mt-[20px] overflow-x-scroll  flex scrollbar-hide "
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="flex space-x-5">
                        {properties.map((property, index) => (
                            <div onClick={() => { handleClickItem(property.propertyId, TypeProperty, property.developerLogo) }} key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden bg-white md:w-full mb-9 relative  cursor-pointer" style={{ width: "272px" }}>

                                {/* Div for Payment Plan */}
                                {property.newParam?.paymentPlan ?
                                    <div className='absolute -right-2 h-[30px] text-white w-[120px] pl-1 rounded-s-lg rounded-t-lg top-6 bg-red-500 text-[10px] tracking-[0px]'>
                                        60 / 40 Payment Plan
                                    </div>
                                    : ""}

                                {/* */}

                                <a href={property.link}>
                                    <div className=" bg-gray-100  ">
                                        <img
                                            src={property.photos[0]}
                                            // property.photos[0]
                                            className="w-full object-cover h-[150px] "
                                            alt={property.alt}
                                        />
                                        {/* Whole Upper  */}
                                        <div className="px-4 ">

                                            {/* Outer div */}
                                            <div className='mt-2 flex justify-between'>
                                                {/* Left side */}
                                                <div className=' '>
                                                    <div className='flex'>
                                                        <img src="/Svg/Price.svg" alt="" />
                                                        <h5 className="box-title text-lg font-bold  flex space-x-1">
                                                            <p className='text-[12px]'>AED</p>
                                                            <p> {formatPrice(property.price)}</p>
                                                        </h5>
                                                    </div>


                                                    <div className=''>
                                                        <div className='leading-4'>
                                                            <p className="text-cyan-500 my-2 text-[14px] font-bold">{property.title}</p>
                                                            <div className='flex'>
                                                                {/* <img src="/Svg/Estate.svg" alt="" /> */}
                                                                <p className="text-cyan-500">{property.developer}</p>
                                                            </div>

                                                            {/* property.developer */}
                                                            <div className='flex mt-1'>
                                                                <img src="/Svg/Location.svg" alt="" />
                                                                <small className="text-gray-500 block ">
                                                                    {property.region}
                                                                    {/* property.region */}
                                                                </small>
                                                            </div>
                                                        </div>

                                                        <div className='flex'>
                                                            <img src="/Svg/Home.svg" alt="" />
                                                            {property.propertyType.map((value, index) => {
                                                                // Capitalize the first letter and make the rest lowercase
                                                                const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                                                return (
                                                                    <div key={index}>
                                                                        {formattedValue}
                                                                        {/* Add a comma only if it's not the last item */}
                                                                        {index < property.propertyType.length - 1 && <span>, </span>}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                    </div>
                                                </div>
                                                {/* Right Side  */}
                                                <div className=' w-[70px] flex justify-end'>
                                                    <img
                                                        src={property.developerLogo}
                                                        className="size-[50px] object-cover   rounded-xl outline outline-[1px] p-1"
                                                        alt={property.alt} />
                                                </div>
                                            </div>

                                            <div className="line my-2 border-b"></div>


                                            <div className="property-data flex justify-between text-sm pb-5 ">
                                                <div className="bed flex items-center gap-x-1 ">
                                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg" width="15" alt="bed" />
                                                    <p>{property.bedRooms || 0}  Beds</p>
                                                    {/* property.newParam.bedroomMax */}
                                                </div>
                                                <div className="bathroom flex items-center gap-x-1 px-1">

                                                </div>
                                                <div className="area flex items-center gap-x-1">
                                                    <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg" width="15" alt="area" />
                                                    <p> {property.size} SQM</p>
                                                    {/* MAx size .newParam.maxSize*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};





const NavBar = ({ User, setUser, Image }) => {
    let users = [['Buy', 'SELL'], ['New Projects', 'NEW'], ['Rent', 'RENT']]
    return (
        <>
            <div className="flex  flex-row justify-center   text-[10px] leading-[25px] sm:leading-[30px]  w-full sm:text-[12px]  sm:w-[250px]  border  rounded-full">
                <div className="flex flex-row  py-1 w-full justify-around items-center rounded-3xl bg-white">
                    {
                        users.map((user) => {
                            return (
                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId={Image?.default ? "explore" : "Trending"} ></motion.div>
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
export default ScrollProperty