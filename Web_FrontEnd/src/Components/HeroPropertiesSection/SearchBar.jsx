import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';

import './index.css';
import { useNavBar } from '../../Context/NavBarContext';
import { usePropertyData } from '../../Context/PropertyDataContext';
import SearchInput from '../SearchBar/Test';

const SearchBar = () => {

    // Here get all the query params if there exists 
    const [UseFilter, setUseFilter] = useState(0);

    const [selectedFilters, setSelectedFilters] = useState();
    const [developers, setDevelopers] = useState([]); // State for developers list
    const { User, setUser } = useNavBar();

    const [InputError, setInputError] = useState('')
    const [InputData, setInputData] = useState('')

    const PropertyType = [
        { "id": "APARTMENT", "name": "Apartment" },
        { "id": "VILLA", "name": "Villa" },
        { "id": "TOWNHOUSE", "name": "Townhouse" },
        { "id": "PENTHOUSE", "name": "Penthouse" },
        { "id": "HOTEL_APARTMENT", "name": "Hotel Apartment" },
        { "id": "DUPLEX", "name": "Duplex" },
        { "id": "RESIDENTIAL_FLOOR", "name": "Residential Floor" },
        { "id": "RESIDENTIAL_PLOT", "name": "Residential Land" },
        { "id": "RESIDENTIAL_BUILDING", "name": "Residential Building" },
        { "id": "BULK_UNITS", "name": "Bulk Units" },
        { "id": "COMPOUND", "name": "Compound" },
        { "id": "TWIN_HOUSE", "name": "Twin House" },
        { "id": "TRIPLEX", "name": "Triplex" },
        { "id": "LOFT", "name": "Loft" },
        { "id": "LOFT_APARTMENT", "name": "Loft Apartment" },
        { "id": "OFFICE", "name": "Office" },
        { "id": "SHOP", "name": "Shop" },
        { "id": "COMMERCIAL_BUILDING", "name": "Commercial Building" },
        { "id": "COMMERCIAL_FLOOR", "name": "Commercial Floor" },
        { "id": "COMMERCIAL_PLOT", "name": "Commercial Land" },
        { "id": "LABOR_CAMP", "name": "Labor Camp" },
        { "id": "RETAIL", "name": "Retail" },
        { "id": "SHOW_ROOM", "name": "Showroom" },
        { "id": "STAFF_ACCOMMODATION", "name": "Staff accommodation" },
        { "id": "COMMERCIAL_VILLA", "name": "Commercial Villa" },
        { "id": "WAREHOUSE", "name": "Warehouse" },
        { "id": "FARM", "name": "Farm" },
        { "id": "FACTORY", "name": "Factory" },
        { "id": "HOTEL", "name": "Hotel" },
        { "id": "HOSPITAL", "name": "Hospital" },
        { "id": "BULK_UNITS_COMMERCIAL", "name": "Bulk Units" },
        { "id": "GARAGE", "name": "Garage" },
        { "id": "RESTAURANT", "name": "Restaurant" },
        { "id": "BUSINESS_CENTRE", "name": "Business Centre" },
        { "id": "CO_WORKING_SPACE", "name": "Co-Working Space" },
        { "id": "OTHER_COMMERCIAL", "name": "Other Commercial" }
    ]




    useEffect(() => {
        const fetchDevelopers = async () => {
            try {
                const DevelopersList = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/v1/developer/list', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                    body: JSON.stringify({
                        page: 1,
                        size: 10000
                    })
                });

                const DevelopersData = await DevelopersList.json();
                if (DevelopersData.statusCode === 200) {
                    const developersList = DevelopersData.data.list.map(dev => ({ id: dev.id + "", name: dev.name }));
                    setDevelopers(developersList); // Store only id and name
                } else {
                    console.error("Failed to fetch developers");
                }
            } catch (error) {
                console.error("Error fetching developers:", error);
            }
        };
        fetchDevelopers();
    }, []);

    // const Status = ['Post HandOver']
    // const Rooms = Array.from({ length: 20 }, (_, i) => `${i + 1}`);




    const Years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030']
    // Handle the filter change when a developer is selected
    const handleFilterChange = (filterType, value) => {

        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value
        }));
    };

    const navigate = useNavigate();


    const SearchProperties = () => {
        // Combine selected filters and listingType into one object
        let searchParams = {  listingType: User[1] };


        if (InputData) {
            searchParams = Object.entries(InputData).reduce((acc, [key, value]) => {
                if (Array.isArray(value)) {
                    // Map over array elements and extract the `id` if each element is an object
                    acc[key] = value.map(item => (typeof item === 'object' && item !== null ? item.id : item));
                } else {
                    // For non-array values, directly set the value or `id` if it's an object
                    acc[key] = typeof value === 'object' && value !== null ? value.id : value;
                }
                return acc;
            }, {});
        }

        // Convert the search parameters object to a query string
        const queryString = new URLSearchParams(searchParams).toString();



        // Navigate to the /SearchProperties route with the query string
        navigate(`/properties?${queryString}`);
    };



    return (
        <>

            <div className='flex justify-center mt-2 sm:mt-5'>
                {/* Show when UserFilter is Not Clicked */}
                {!UseFilter ? <div className='bg-white relative w-[250px] sm:w-[500px]  sm:h-[45px] rounded-full  flex border '>
                    <img className='absolute  top-[35%] left-3' src="/Svg/Search.svg" alt="" />
                    {/* <input className='ml-10 h-full sm:w-[700px] outline-none text-[14px] placeholder:text-[10px] sm:placeholder:text-[14px]' type="text" placeholder='Search by area or project name' /> */}
                    <SearchInput InputError={InputError} setInputError={setInputError} InputData={InputData} setInputData={setInputData}/>


                    {UseFilter ? <div className='flex justify-end w-full'>
                        <div className=' rounded-full px-4 sm:py-1 sm:my-1 mr-2 cursor-pointer flex justify-center items-center borderRed' onClick={() => { SearchProperties() }} >
                            <p>Search</p>
                        </div>
                        {/* <SearchInput InputError={InputError} setInputError={setInputError} InputData={InputData} setInputData={setInputData}/> */}

                    </div> : <div className='flex justify-end w-full'>
                        <div className='bg-[#82DFDF] flex justify-center items-center rounded-full my-1 px-2 sm:px-4 sm:py-1 sm:my-1 mr-2 cursor-pointer ' onClick={() => { SearchProperties() }} >
                            <h1> Search</h1>

                        </div>
                    </div>}
                </div> : ""}
            </div>
            { InputError && <p className="text-base text-white mt-2">{InputError}</p>}

        </>
    );
};








export default SearchBar;
