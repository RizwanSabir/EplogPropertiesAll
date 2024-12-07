import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import CustomLoader from '../Loaders/CustomLoader';
import { usePropertyData } from '../../Context/PropertyDataContext';

const SearchInput = ({ InputError, setInputError, InputData, setInputData }) => {

  const { PropertyData, setPropertyData } = usePropertyData();
  const [query, setQuery] = useState(PropertyData?.name||""); // Default to an empty string
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null);
  const [error, setError] = useState(InputError);
  const [noResults, setNoResults] = useState(false);
  const [lastResult, setLastResult] = useState([]);
  const dropdownRef = useRef(null); // Ref to detect outside clicks


// // Update query when initialValue changes
useEffect(() => {

  if (PropertyData?.name!== query) {
      const Inputdatanew=handleInputData(PropertyData)
      setQuery(PropertyData?.name);
      setInputData(Inputdatanew)
  }
  
}, [PropertyData]);


  const handleSearch = async () => {
    if (query.length < 3) return;

    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);
    setError('')
    setLoading(true);
    setNoResults(false);
    try {
      const response = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/search/${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-', // Replace with your actual token
        },
        body: JSON.stringify({
          page: 1,
          size: 10,
        }),
        signal: newController.signal,
      });

      const data = await response.json();
      if (data.statusCode === 200 && data.data.length > 0) {
        setLocations(data.data);
        setLastResult(data.data);
        setNoResults(false);
      } else if (data.data.length === 0) {
        setLocations(lastResult);
        setNoResults(true);
        setError("No results found for your search.");
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error("Error fetching locations:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    
    
    if (newQuery.length < 4) {
      setInputError("Please enter at least 4 characters to search.");
      setLocations([]);
      setNoResults(false);
    } else {
      setInputError('');
      handleSearch();
    }
  };
  const handleSelectLocation = (location) => {
 

    // Dynamically construct the input data object
    const newInputData = {};
    if (location.cityId) newInputData.cityIds = [location.cityId];
    if (location.regionId) newInputData.regionIds = [location.regionId];
    if (location.communityId) newInputData.communityIds = [location.communityId];
    if (location.communityId) newInputData.fullName = location.fullName;

    let name = location.fullName.split(',');
                if (name.length > 1) {
                    name.pop(); // Remove the last word
                }
                name = name.join(','); // Join back as a string
    if (location.fullName) newInputData.name = name;

    setInputData(newInputData);
    setQuery(location.fullName);
    setLocations([]);
    setNoResults(false);
};
  const handleInputData = (PropertyData) => {
 

    // Dynamically construct the input data object
    const newInputData = {};
    if (PropertyData.cityId) newInputData.cityIds = [PropertyData.cityId];
    if (PropertyData.regionId) newInputData.regionIds = [PropertyData.regionId];
    if (PropertyData.communityId) newInputData.communityIds = [PropertyData.communityId];
    if (PropertyData.name) newInputData.name = PropertyData.name;

    return newInputData
};




  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setLocations([]);
    }
  };

  // Add event listener to detect clicks outside of the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cleanup on component unmount or re-render to cancel any ongoing requests
  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  return (
    <div ref={dropdownRef}>
      <input
        className='ml-10 h-full xs:w-[200px] md:w-[350px] outline-none text-[14px] placeholder:text-[12px] sm:placeholder:text-[14px]'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type a city or region..."
      />
      {/* {error && <p className="text-sm text-red-500 mt-2">{error}</p>} */}

      {noResults && query.length >= 3 && locations.length === 0 || (error) && (
        <div className="text-sm text-red-500 mt-2">No further results found</div>
      )}

      {!noResults && locations.length > 0 ? (
        <div className="mt-5 w-[200px] text-black bg-white absolute border overflow-y-scroll rounded scrollbar text-left h-[200px] flex flex-col z-[150]">
          {locations.map((dev, index) => (
            <div
              key={index}
              onClick={() => handleSelectLocation(dev)}
              className="w-full cursor-pointer hover:bg-gray-200 pl-2 flex gap-y-2 items-center"
            >
              <p>{dev.fullName}</p>
            </div>
          ))}
        </div>
      ) : loading ? (
        <div className="mt-2 w-[200px] text-black bg-white absolute border overflow-y-scroll rounded scrollbar text-left h-[200px] flex flex-col z-[150]">
          <CustomLoader />
        </div>
      ) : ""}
    </div>
  );
};

export default SearchInput;
