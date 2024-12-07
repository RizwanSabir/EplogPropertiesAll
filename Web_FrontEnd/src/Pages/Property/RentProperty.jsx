import { useEffect, useRef, useState } from 'react';


import SearchBar from '../Properties/SearchBar';
import { AnimatePresence, motion } from 'framer-motion';
import ContactUs from '../Footer/ContactUs';
import Footer from '../Footer/Footer';
import NewsLetter from '../Footer/NewsLetter';
import { useNavigate, } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import FloorPlan from '../../Components/Property/FloorPlan';
import PaymentPlan from '../../Components/Property/PaymentPlan';
import CustomLoader from '../../Components/Loaders/CustomLoader';
import { div } from 'framer-motion/client';
import TruncatedText from '../../Components/Property/TruncatedText';
import SliderComponentBuy from '../../Components/Property/SliderComponentBuy';
import SliderComponentNew from '../../Components/Property/SliderComponentNew';
import ScrollProperty from '../../Components/ScrollProperty/ScrollProperty';
import BookVisit from './BookVisit';
import Navbar from '../../Components/NavBar';


const RentProperty = ({ HeroText }) => {
    const [searchParams] = useSearchParams();
    let [User, setUser] = useState(['New Projects', 'Brand']);
    let [PropertyDetail, setPropertyDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const propertyId = searchParams.get('propertyId');
    const DeveloperLogo = searchParams.get('dl');


    const formatPrice = (price) => {
        if (price >= 1_000_000) {
            // Round off to millions with two decimal places
            return `${(price / 1_000_000).toFixed(2)} M`;
        } else if (price >= 1_000) {
            // Round off to thousands with two decimal places
            return `${(price / 1_000).toFixed(1)} K`;
        } else {
            return `${price.toFixed(2)}`; // Return the price as is if it's less than 1,000 with two decimal places
        }
    };




    useEffect(() => {
        const fetchDevelopers = async () => {
            setLoading(true);
            try {
                const DevelopersList = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/${propertyId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                });

                const DevelopersData = await DevelopersList.json();
                if (DevelopersData.statusCode === 200) {

                    setPropertyDetail(DevelopersData.data)

                } else {
                    console.error("Failed to fetch developers");
                }
            } catch (error) {
                console.error("Error fetching developers:", error);
            }
            finally {
                setLoading(false);

            }
        };
        fetchDevelopers();
    }, [searchParams, propertyId]);

    const navigate = useNavigate();



    const handleBack = () => {

        navigate('/SearchProperties');
    };

    return (
        <>

            {loading ? (
                <div className='flex justify-center items-center w-full h-screen'>
                    <div className='mt-10'>
                        <CustomLoader />
                    </div>
                </div>
            ) : (<>
                <div className="pt-2 text-[14px] px-4 h-fit">


                    {/* Top Navigation on Small Screen  */}
                    <div className='flex mdm:hidden'>

                        <TopNavigationTab />

                    </div>

                    {/* Banner section */}
                    <div className="relative w-full "  >
                        <div className=" px-[10px] overflow-hidden mx-auto text-[10px] h-full ">
                            {/* Top Hero Section */}

                            <div className="row h-full flex">
                                <TopNavigationTabLarge />
                            </div>



                            {/* Heading of the property */}
                            <div className='mt-5 space-y-3'>
                                <p className='text-[40px] items-center  font-bold  my-5'>{PropertyDetail.name}</p>
                            </div>

                            {/* Property Pictures */}
                            <div className='flex flex-col justify-center w-full lg:flex-row '>

                                {/* Left side */}
                                <div className='flex flex-col lg:gap-x-6 mt-2  mx-auto  lg:w-[687px]'>

                                    {/* <SliderComponent images={['https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg', 'https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg', "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg", "https://eplogproperties.com/wp-content/uploads/2023/10/propert-detail1.svg"]} /> */}
                                    <SliderComponentNew baseUrl='https://dataapi.pixxicrm.ae/pixxiapi/v1/' PropertyId={PropertyDetail.propertyId} images={PropertyDetail.photos} />



                                    <div className='bg-[#7C3EFF] hidden md:flex text-[12px] h-[104px] w-full  rounded-xl  justify-around  items-center   text-white mt-5'>
                                        <div className="property-data flex  w-full justify-around ">
                                            <div className="bed flex items-center gap-x-1  ">
                                                <img src='https://eplogproperties.com/wp-content/themes/dtheme/assets/images/bad-icon-white.svg' width="15" alt="bed" />



                                                <div className='leading-[14px] flex flex-col items-center'>
                                                    <p > Beds </p>
                                                    <p>{PropertyDetail.newParameter?.bedroomMax}-{PropertyDetail.newParameter?.bedroomMin}</p>
                                                </div>
                                            </div>

                                            <div className="area flex items-center gap-x-1">
                                                <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/compress-icon-white.svg" width="15" alt="area" />

                                                <div className='leading-[14px] flex flex-col items-center'>
                                                    <p> SQM </p>
                                                    <p> {PropertyDetail.newParameter?.maxSize} -{PropertyDetail.newParameter?.minSize} </p>
                                                </div>
                                            </div>
                                            {/* handoverTime */}

                                            {PropertyDetail.newParameter?.handoverTime ? (
                                                <div className="flex items-center gap-x-1 px-1">
                                                    <img
                                                        src="/Svg/HandOver.svg"
                                                        width="15"
                                                        alt="Hand Over"
                                                    />
                                                    <div className='leading-[14px] flex flex-col items-center'>
                                                        <p> Hand Over </p>
                                                        <p>
                                                            {
                                                                // Parse the date string and format it
                                                                (() => {
                                                                    const date = new Date(PropertyDetail.newParameter.handoverTime);
                                                                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                                                    return date.toLocaleDateString(undefined, options);
                                                                })()
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}

                                        </div>
                                    </div>


                                    <div className=' hidden md:flex rounded-3xl shadow-[5px_4px_44px_#00000017] w-full mx-auto  lg:w-full overflow-hidden md:w-full  p-5 relative   mt-5'>
                                        <p className='mt-3 text-xl'>
                                            <TruncatedText text={PropertyDetail.description} maxLines={3} />

                                        </p>
                                    </div>
                                </div>

                                {/* right side */}
                                <div className="lg:ml-10  w-full ">
                                    <div className='bg-[#7C3EFF] hidden md:flex text-[12px] h-[60px] w-full  rounded-xl  justify-around  items-center   text-white'>
                                        <p className='text-lg w-[180px] text-center flex-grow px-2'>New Property</p>
                                        <p className='bg-[#82DFDF] w-full h-full text-lg text-black flex items-center justify-center font-bold rounded-r-xl'>AED {formatPrice(PropertyDetail.price)}</p>
                                    </div>
                                    <PropertyDetails property={PropertyDetail} DeveloperLogo={DeveloperLogo} />

                                    <div className=' flex md:hidden rounded-3xl shadow-[5px_4px_44px_#00000017]  mx-auto  lg:w-full overflow-hidden md:w-full  p-5 relative   mt-5'>
                                        <p className='mt-3 text-xl'>
                                            <TruncatedText text={PropertyDetail.description} maxLines={3} />

                                        </p>
                                    </div>

                                    <div className='bg-[#7C3EFF]  flex md:hidden text-[12px] h-[104px] w-full  rounded-xl  justify-around  items-center   text-white mt-5'>
                                        <div className="property-data flex  w-full justify-around ">
                                            <div className="bed flex items-center gap-x-1  ">
                                                <img src='https://eplogproperties.com/wp-content/themes/dtheme/assets/images/bad-icon-white.svg' width="15" alt="bed" />



                                                <div className='leading-[14px] flex flex-col items-center'>
                                                    <p > Beds </p>
                                                    <p>{PropertyDetail.newParameter?.bedroomMax}-{PropertyDetail.newParameter?.bedroomMin}</p>
                                                </div>
                                            </div>

                                            <div className="area flex items-center gap-x-1">
                                                <img src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/compress-icon-white.svg" width="15" alt="area" />

                                                <div className='leading-[14px] flex flex-col items-center'>
                                                    <p> SQM </p>
                                                    <p> {PropertyDetail.newParameter?.maxSize} -{PropertyDetail.newParameter?.minSize} </p>
                                                </div>
                                            </div>
                                            {/* handoverTime */}

                                            {PropertyDetail.newParameter?.handoverTime ? (
                                                <div className="flex items-center gap-x-1 px-1">
                                                    <img
                                                        src="/Svg/HandOver.svg"
                                                        width="15"
                                                        alt="Hand Over"
                                                    />
                                                    <div className='leading-[14px] flex flex-col items-center'>
                                                        <p> Hand Over </p>
                                                        <p>
                                                            {
                                                                // Parse the date string and format it
                                                                (() => {
                                                                    const date = new Date(PropertyDetail.newParameter.handoverTime);
                                                                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                                                    return date.toLocaleDateString(undefined, options);
                                                                })()
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}

                                        </div>
                                    </div>
                                    <div className='flex flex-col  lg:items-end space-y-5 lg:justify-end lg:space-x-5 text-[14px] '>
                                        <BookVisit PropertyData={PropertyDetail} propertyId={propertyId} Type="New projects" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-[1px] px-4 w-full bg-slate-300  my-10'></div>
                    <p className='text-[40px] items-center  font-bold  px-4'>Customers Also Viewed </p>

                    <div className='pt-5'>
                        {/* <PropertyListing properties={properties} /> */}
                        <ScrollProperty User={["New Projects", "NEW"]} Page={1} />
                    </div>
                </div>
                <NewsLetter />
                <Footer />
            </>)
            }


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
                <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" alt="" />
            </a>
        </div>

        {/* Nav Bar */}
        <div className=" hidden mdm:flex col-6 relative flex justify-end">
            <Navbar />
        </div>

    </>
}


const PropertyDetails = ({ property, DeveloperLogo }) => {
    const [loading, setLoading] = useState(true);
    const [DeveloperData, setDeveloperData] = useState()

    useEffect(() => {
        const fetchDevelopers = async () => {
            setLoading(true);
            try {
                const DevelopersList = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/${propertyId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                });

                const DevelopersData = await DevelopersList.json();
                if (DevelopersData.statusCode === 200) {

                    setPropertyDetail(DevelopersData.data)

                } else {
                    console.error("Failed to fetch developers");
                }
            } catch (error) {
                console.error("Error fetching developers:", error);
            }
            finally {
                setLoading(false);

            }
        };
        fetchDevelopers();
    }, []);
    return (
        <>
            <div
                className="  overflow-x-scroll  flex scrollbar-hide ">
                <div className="grid  w-full">
                    <div className="  rounded-b-3xl  overflow-hidden md:w-full  relative w-full " >
                        <a >
                            <div className=" bg-gray-100  ">

                                {/* Whole Upper  */}
                                <div className="p-4 ">

                                    {/* Outer div */}
                                    <div className='mt-2 flex justify-between'>
                                        {/* Left side */}
                                        <div className=' '>


                                            <p className='font-bold text-xl'>Developers</p>

                                            <div className='text-lg'>
                                                <div className='leading-4'>

                                                    <div className='flex space-x-2'>
                                                        {/* <img src="/Svg/Estate.svg" alt="" /> */}
                                                        <p className="text-cyan-500"> {property.developerName}</p>
                                                    </div>

                                                    {/* property.developer */}
                                                    <div className='flex mt-1'>
                                                        <img src="/Svg/Location.svg" alt="" />
                                                        <small className="text-gray-500 block ">
                                                            {property.cityName}
                                                            {/* property.region */}
                                                        </small>
                                                    </div>
                                                    <div className='flex'>
                                                        <img src="/Svg/Home.svg" alt="" />
                                                        {property.houseType.map((value, index) => {
                                                            // Capitalize the first letter and make the rest lowercase
                                                            const formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                                            return (
                                                                <div key={index} className='text-base'>
                                                                    {formattedValue}
                                                                    {/* Add a comma only if it's not the last item */}
                                                                    {index < property.propertyType.length - 1 && <span>, </span>}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        {/* Right Side  */}
                                        <div>
                                            <img
                                                src={DeveloperLogo}
                                                className="size-[50px] object-cover   rounded-xl outline outline-[1px] p-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default RentProperty;
