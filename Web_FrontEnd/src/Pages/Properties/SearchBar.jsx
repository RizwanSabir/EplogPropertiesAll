import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const SearchBar = () => {
    const [UseFilter, setUseFilter] = useState(0);

    const [selectedFilters, setSelectedFilters] = useState({
        location: [],
        year: '',
        developer: '',
        status: '',
        rooms: ''
    });

    const developers = ['Developer 1', 'Developer 2', 'Developer 3', 'Developer 4', 'Developer 1', 'Developer 2', 'Developer 3', 'Developer 4', 'Developer 1', 'Developer 2', 'Developer 3', 'Developer 4', 'Developer 1', 'Developer 2', 'Developer 3', 'Developer 4'];
    const Status = ['Post HandOver']
    const Rooms = ['1 Room', '2 Room', '3 Room']
    const PropertyType = ['Apartments', 'Vills', '3 Room', 'Townhouse', 'Penthouse', 'Residential Plot', 'Compound', 'Duplex', 'Residential Floor']
    const Years = ['2025', '2024', '2023', '2022', '2021', '2019', '2018', '2017',]
    // Handle the filter change when a developer is selected
    const handleFilterChange = (filterType, value) => {

        // Implement your filtering logic here
    };
    return (
        <>

            <div className='flex justify-center mt-5'>
                <div className='bg-white relative w-[500px] h-[45px] rounded-full overflow-hidden flex border '>
                    <img className='absolute  top-[35%] left-3' src="/Svg/Search.svg" alt="" />
                    <input className='ml-10 h-full w-[300px] outline-none text-[14px]' type="text" placeholder='Search' />


                    {UseFilter ? <div className='flex justify-end w-full'>
                        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 my-1 mr-2 cursor-pointer'>Apply Filter </h1>
                    </div> : <div className='flex justify-end w-full'>
                        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 my-1 mr-2 cursor-pointer'>Search</h1>
                        <h1 className='b rounded-full px-4 py-1 my-1 mr-2 cursor-pointer' onClick={() => { setUseFilter(!UseFilter) }}>Filtesssr</h1>
                    </div>}
                </div>
            </div>


            {UseFilter ? <motion.div
                animate={{ height: "auto" }}
                transition={{ duration: 1 }}
                className=" inset-0 z-30 flex justify-center items-center bg-gray-800 bg-opacity-50  rounded">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] z-50">
                    <div className='flex justify-end w-full'>
                    </div>
                    {/* Filter Fields */}
                    <div className="grid grid-cols-3 gap-x-2  justify-center items-center place-content-center content-center ">
                        {/* Location */}
                        <DropFilter Name="Years" developers={developers} handleFilterChange={handleFilterChange} />
                        <DropFilter Name="Developers" developers={developers} handleFilterChange={handleFilterChange} />
                        <DropFilter Name="Status" developers={Status} handleFilterChange={handleFilterChange} />
                        <DropFilter Name="Rooms" developers={Rooms} handleFilterChange={handleFilterChange} />
                        <DropFilter Name="Property Type" developers={PropertyType} handleFilterChange={handleFilterChange} />
                    </div>
                    {/* Buttons */}
                </div>
            </motion.div> : ""}
        </>
    );
};

const DropFilter = ({ Name, developers, handleFilterChange }) => {
    const [selectedDevelopers, setSelectedDevelopers] = useState([]); // Store selected developers
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility
    const dropdownRef = useRef(null); // Ref for the dropdown

    // Handle the change of developer selection
    const handleSelectChange = (value) => {
        setIsDropdownOpen(false); // Close dropdown after selection
        setSelectedDevelopers((prev) => {
            // Toggle selection: add or remove developer
            if (prev.includes(value)) {
                return prev.filter(dev => dev !== value); // Remove if already selected
            } else {
                return [...prev, value]; // Add if not selected
            }
        });
        handleFilterChange(Name, selectedDevelopers); // Update filter
    };

    // Handle removal of selected developer
    const handleRemoveDeveloper = (value) => {
        setSelectedDevelopers((prev) => prev.filter(dev => dev !== value)); // Remove developer
        handleFilterChange(Name, selectedDevelopers); // Update filter
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
    }, [dropdownRef]);

    return (
        <motion.div
            key={isDropdownOpen}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            className='text-[#bebec0]'
            ref={dropdownRef} // Attach ref to the dropdown div
        >
            <label className='text-black'>{Name}</label>
            <div className='relative '>
                <div
                    className={`w-full text-left px-2 py-1 border rounded cursor-pointer  ${selectedDevelopers.length >= 1 ? 'overflow-x-scroll' : ''} overflow-y-auto`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {/* Display all selected developers with a close button */}
                    <div className={`flex gap-x-2`}>
                        {selectedDevelopers.length > 0 ? (
                            selectedDevelopers.map((dev, index) => (
                                <div key={index} className='border-[#82DFDF] border px-2 rounded max-h-fit flex flex-shrink-0'>
                                    <span className='flex items-center'>
                                        <span className='text-[#82DFDF]'>{dev}</span>
                                        <button
                                            onClick={() => handleRemoveDeveloper(dev)}
                                            className="ml-2 text-[#82DFDF]"
                                            title="Remove"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            'Select ' + Name
                        )}
                    </div>
                </div>

                {isDropdownOpen && (
                    <div className=''>
                        <div className="mt-2 text-black bg-white absolute border  overflow-auto z-50 rounded w-full text-left  h-[200px] flex flex-col   
                        ">
                            {developers.map((dev, index) => (
                                <div
                                    key={index}
                                    className="w-full cursor-pointer hover:bg-gray-200 pl-2 flex gap-x-2 items-center"
                                    onClick={() => handleSelectChange(dev)}
                                >
                                    {/* Show a tick if the developer is selected */}
                                    {selectedDevelopers.includes(dev) && (
                                        <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                                    )}
                                    <p>{dev}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default SearchBar;
