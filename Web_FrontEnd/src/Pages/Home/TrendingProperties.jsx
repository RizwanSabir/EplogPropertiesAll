
import React, { useRef, useState } from "react";
import './index.css';
const TrendingProperties = () => {


    const properties = [
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: true, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
        {
            link: "#",
            image: "https://eplogproperties.com/wp-content/uploads/2023/10/1.svg",
            alt: "Property 1",
            isForRent: false, // Use false for "For Sale"
            price: "AED 1.2 Million",
            location: "IMPZ Production City",
            building: "Building 4410 Lake side",
            beds: 4,
            bathrooms: 2,
            area: 1200,
            bedIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/bed-icon.svg",
            bathroomIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/shower-icon.svg",
            areaIcon: "https://eplogproperties.com/wp-content/themes/dtheme/assets/images/trending-properties/compress-icon.svg",
        },
    ];

    return (
        <>

            <section className="section px-[50px] ">
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center ">
                        <div className="w-full flex items-center justify-center gap-10">
                            <h1 className="section-title-small  text-[20px] md:text-[40px]">
                                Trending<br />
                                Properties
                            </h1>
                            <div className="line hidden md:flex">
                                <img
                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                            <a
                                href="https://eplogproperties.com/properties/"
                                className=" w-[150px]  text-[16px] font-bold leading-[19.23px]  btn-primary text-center py-2 bg-blue-500 text-white py-1 px-2 rounded-[14px]"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                </div>



                <PropertyListing properties={properties} />


            </section>



        </>
    )
}


const PropertyListing = ({ properties }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast, adjust multiplier as needed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="md:ml-[100px] mt-[40px] overflow-x-scroll  flex scrollbar-hide"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="flex space-x-5 ">
                {properties.map((property, index) => (
                    <div key={index} className="  rounded-3xl shadow-[5px_4px_44px_#00000017] w-[200px] overflow-hidden md:w-full mb-9" style={{ width: "272px" }}>
                        <a href={property.link}>
                            <div className=" bg-gray-100  ">
                                <img
                                    src={property.image}
                                    className="w-full object-cover"
                                    alt={property.alt}
                                />
                                <div className="px-4">
                                    {property.isForRent ? (
                                        <div className=" text-black my-1">For Rent</div>
                                    ) : (
                                        <div className="tag-yellow text-white px-2 my-1 rounded-full">
                                            For Sale
                                        </div>
                                    )}
                                    <h5 className="box-title text-lg font-bold">
                                        {property.price}
                                    </h5>
                                    <p className="text-cyan-500">{property.location}</p>
                                    <small className="text-gray-500 block mt-5">
                                        {property.building}
                                    </small>
                                    <div className="line my-2 border-b"></div>

                                    <div className="property-data flex justify-between text-sm pb-5 ">
                                        <div className="bed flex items-center gap-x-1 ">
                                            <img src={property.bedIcon} width="15" alt="bed" />
                                            <p>{property.beds} Beds</p>
                                        </div>
                                        <div className="bathroom flex items-center gap-x-1 px-1">
                                            <img
                                                src={property.bathroomIcon}
                                                width="15"
                                                alt="bathroom"
                                            />
                                            <p> {property.bathrooms}  Bath</p>
                                        </div>
                                        <div className="area flex items-center gap-x-1">
                                            <img src={property.areaIcon} width="15" alt="area" />
                                            <p> {property.area} SQM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};





export default TrendingProperties