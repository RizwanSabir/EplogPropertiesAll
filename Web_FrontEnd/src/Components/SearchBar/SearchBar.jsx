import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';

import './index.css';
import { useNavBar } from '../../Context/NavBarContext';
import { usePropertyData } from '../../Context/PropertyDataContext';
import { SlExclamation } from 'react-icons/sl';
import { MdPreview } from 'react-icons/md';
import SearchInput from './Test';

const SearchBar = () => {

    // Here get all the query params if there exists 

    const { PropertyData, setPropertyData } = usePropertyData();
    const [UseFilter, setUseFilter] = useState(Boolean(PropertyData && Object.keys(PropertyData).length > 0));
    const [InputError, setInputError] = useState('')
    const [InputData, setInputData] = useState('')
    const [selectedFilters, setSelectedFilters] = useState();
    const [developers, setDevelopers] = useState([]); // State for developers list
    const [QueryDeveloper, setQueryDeveloper] = useState(''); // State for developers list
    const [QueryPropertyType, setQueryPropertyType] = useState(''); // State for developers list
    const [QueryBedRoomNum, setQueryBedRoomNum] = useState(''); // State for developers list

    const { User, setUser } = useNavBar();

    const PropertyType = [
        { id: "APARTMENT", name: "Apartment" },
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

    // If PropertyData might change over time, use an effect to update UseFilter
    useEffect(() => {
        setUseFilter(Boolean(PropertyData && Object.keys(PropertyData).length > 0));
    }, [PropertyData]);


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

    const bedRoomNum = Array.from({ length: 20 }, (_, i) => ({
        id: `${i + 1}`, // String representation of the number
        name: i + 1 + ""    // Integer value
    }));

    // Adding 'Studio' to the front of the array
    bedRoomNum.unshift({ id: 'Studio', name: 'Studio' });




    const Years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030']
    // Handle the filter change when a developer is selected
    const handleFilterChange = (filterType, value) => {

        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value
        }));
    };




    const SearchProperties = () => {
        // Process `selectedFilters` to extract only `id` values from arrays of objects
        let searchParams = {};
        let searchParams2 = {};

        if (selectedFilters) {
            searchParams = Object.entries(selectedFilters).reduce((acc, [key, value]) => {
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

        if (InputData) {
            searchParams2 = Object.entries(InputData).reduce((acc, [key, value]) => {
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

        // Ensure `listingType` exists in `searchParams`, defaulting to `User[1]` if absent
        if (!searchParams.listingType) {
            searchParams.listingType = User[1];
        }


        // Combine both searchParams and searchParams2

        const combinedParams = { ...searchParams, ...searchParams2 };

     
        // Optionally, update the property data in state
        // Convert the combined search parameters object to a query string
        const queryString = new URLSearchParams(combinedParams).toString();

        // Set the query string in the URL without navigation
        const newUrl = `${window.location.pathname}?${queryString}`;
        window.history.pushState(null, '', newUrl);
        setPropertyData({ ...searchParams, ...InputData });
    };

    useEffect(() => {
        function mapDevelopers(propertyDeveloperIds, developerList) {
            return developerList.filter(developer => propertyDeveloperIds.includes(developer.id));
        }

        if (PropertyData?.developerIds && PropertyData.developerIds.length > 0) {
            const result = mapDevelopers(PropertyData.developerIds, developers);
            setQueryDeveloper(result);
        } else {
            // Optionally clear the QuerySelect if developerIds is empty or undefined
            setQueryDeveloper([]);
        }
    }, [PropertyData, developers]);

    useEffect(() => {
        function mapDevelopers(propertyDeveloperIds, developerList) {
            return developerList.filter(developer => propertyDeveloperIds.includes(developer.id));
        }

        if (PropertyData?.propertyType && PropertyData.propertyType.length > 0) {
            const result = mapDevelopers(PropertyData.propertyType, PropertyType);
            setQueryPropertyType(result);
        } else {
            // Optionally clear the QuerySelect if developerIds is empty or undefined
            setQueryPropertyType([]);
        }
    }, [PropertyData]);

    useEffect(() => {
        function mapDevelopers(propertyDeveloperIds, developerList) {
            return developerList.filter(developer => propertyDeveloperIds.includes(developer.id));
        }

        if (PropertyData?.bedRoomNum && PropertyData.bedRoomNum.length > 0) {
            const result = mapDevelopers(PropertyData.bedRoomNum, bedRoomNum);
            setQueryBedRoomNum(result);
        } else {
            // Optionally clear the QuerySelect if developerIds is empty or undefined
            setQueryBedRoomNum([]);
        }
    }, [PropertyData]);



    return (
        <>

            <div className='flex flex-col justify-center items-center mt-5 z-50'>
                {/* Show when UserFilter is Not Clicked */}
                {!UseFilter ? <div className='bg-white relative w-[300px] sm:[300px] mdm:w-[500px] rounded-full  flex border justify-center xs:justify-between'>
                    <div className=' flex  xs:w-[300px] items-center '>
                        <img className='size-[20px] ml-2' src="/Svg/Search.svg" alt="" />
                        <SearchInput InputError={InputError} setInputError={setInputError} InputData={InputData} setInputData={setInputData} />
                    </div>
                    <div className=' hidden xs:flex  w-full'>
                        <h1 className='b rounded-full px-4 py-1 my-1 mr-2 cursor-pointer' onClick={() => { setUseFilter(!UseFilter) }}>Filter</h1>
                    </div>
                </div>
                    : ""}

                {!UseFilter ? (<div className='flex xs:hidden w-full justify-center mt-2'>
                    <h1 className='b rounded-full px-4 py-1 my-1 mr-2 cursor-pointer' onClick={() => { setUseFilter(!UseFilter) }}>Filter</h1>
                </div>) : ("")}
            </div>

            {UseFilter ? <motion.div
                animate={{ height: "auto" }}
                transition={{ duration: 1 }}
                className=" inset-0 z-30 flex justify-center items-center  bg-gray-800 bg-opacity-50  rounded relative  ">

                <div className='bg-white rounded-3xl py-5 px-5 outline outline-[1px]'>

                    <div className='bg-white mx-auto relative xs:w-[290px]  md:w-[500px]  rounded-xl  flex border   py-2'>
                        <img className='absolute  top-[35%] left-3' src="/Svg/Search.svg" alt="" />
                        <SearchInput InputError={InputError} setInputError={setInputError} InputData={InputData} setInputData={setInputData} />
                    </div>
                    {UseFilter && InputError && <p className="text-sm text-red-500 mt-2">{InputError}</p>}
                    {/* Filter Fields */}
                    <div className="bg-white  rounded-lg w-full sm:w-[400px]  md:w-[800px] z-50 ">
                        <div className={`grid  grid-cols-2 ${User[1] != 'NEW' ? 'md:grid-cols-3' : 'md:grid-cols-2'}   gap-x-2    relative   md:w-[600px] mx-auto `}>
                            <CustomDropFilter Name="Developers" Value="developerIds" developers={developers} handleFilterChange={handleFilterChange} QuerySelect={QueryDeveloper} />
                            <CustomDropFilter Name="Property Type" Value="propertyType" developers={PropertyType} handleFilterChange={handleFilterChange} QuerySelect={QueryPropertyType} />
                            {User[1] != 'NEW' ? <CustomDropFilter Name="Rooms " Value="bedRoomNum" developers={bedRoomNum} handleFilterChange={handleFilterChange} QuerySelect={QueryBedRoomNum} /> : ""}
                        </div>
                        <div className='flex justify-end mt-2'>
                            <h1 className='  sm:flex bg-[#82DFDF] rounded-full px-4 py-1 my-1  cursor-pointer' onClick={() => { SearchProperties() }}  >Search  </h1>
                        </div>
                    </div>
                </div>
            </motion.div> : ""}
        </>
    );
};



const CustomDropFilter = ({ Name, Value, developers, handleFilterChange, QuerySelect }) => {

    const [selectedDevelopers, setSelectedDevelopers] = useState([]);


    useEffect(() => {
        if (QuerySelect && Object.keys(QuerySelect).length > 0) {
            const selectedIds = QuerySelect.map(dev => dev.id);
            handleFilterChange(Value, selectedIds);
            setSelectedDevelopers(QuerySelect);
        }
    }, [QuerySelect]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility
    const [searchTerm, setSearchTerm] = useState(''); // Store search term
    const dropdownRef = useRef(null); // Ref for the dropdown


    const handleSelectChange = (value) => {
        setSelectedDevelopers((prev) => {
            let updatedSelected;
            // Check if the developer ID already exists in the selected array
            if (prev.some(dev => dev.id === value.id)) {
                // Remove the developer with the matching ID
                updatedSelected = prev.filter(dev => dev.id !== value.id);
            } else {
                updatedSelected = [...prev, value];
            }
            const selectedIds = updatedSelected.map(dev => dev.id);
            handleFilterChange(Value, selectedIds);
            return updatedSelected;
        });
    };

    const handleRemoveDeveloper = (value) => {
        setSelectedDevelopers((prev) => {
            const updatedSelected = prev.filter(dev => dev.name !== value);
            handleFilterChange(Value, updatedSelected); // Update filter with the updated list
            return updatedSelected;
        });
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Filter developers based on the search term
    const filteredDevelopers = developers.filter(dev =>
        dev.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            key={isDropdownOpen}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            className='text-[#bebec0] select-none mt-5'
            ref={dropdownRef} // Attach ref to the dropdown div
        >

            <div className='relative'>
                <div
                    className={`w-full text-left flex py-1 px-2 border rounded cursor-pointer ${selectedDevelopers.length >= 1 ? '  scrollbarX' : ''} overflow-y-auto`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {/* Display all selected developers with a close button */}
                    <div className='flex gap-x-2 z-50 flex-shrink-0'>
                        {selectedDevelopers.length > 0 ? (
                            selectedDevelopers.map((dev, index) => (
                                <div key={index} className='border-[#82DFDF] border px-2 rounded max-h-fit flex flex-shrink-0'>
                                    <span className='flex items-center'>
                                        <span className='text-[#82DFDF]'>{dev.name}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent dropdown toggle
                                                handleRemoveDeveloper(dev.name);
                                            }}
                                            className="ml-2 text-[#82DFDF]"
                                            title="Remove"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            isDropdownOpen ? '' : 'Select ' + Name
                        )}
                    </div>


                    {/* Search input */}
                    {isDropdownOpen && (
                        <input
                            type="text"
                            className="w-full  px-2 py-1  rounded text-black outline-none  flex flex-shrink-0"
                            placeholder="Search developers..."
                            value={searchTerm}
                            onClick={(e) => e.stopPropagation()} // Prevent closing dropdown on input click
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}
                </div>

                {isDropdownOpen && (
                    <div className="mt-2 text-black bg-white absolute border overflow-auto  rounded w-full text-left h-[200px] flex flex-col z-[150] scrollbar">
                        {filteredDevelopers.map((dev, index) => (
                            <div
                                key={index}
                                className="w-full cursor-pointer hover:bg-gray-200 pl-2 flex gap-x-2 items-center border-y-[1px] border-[#F1F1F1]"
                                onClick={() => handleSelectChange(dev)}
                            >
                                {/* Show a tick if the developer is selected */}
                                {/* Show a tick if the developer is selected */}
                                {selectedDevelopers.some(d => d.name === dev.name) && (
                                    <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                                )}
                                <p>{dev.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default SearchBar;
