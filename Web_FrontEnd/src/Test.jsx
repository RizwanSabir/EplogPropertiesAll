import { p } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

const LocationSearch = () => {
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null); // Store the AbortController

  const handleSearch = async () => {
    if (query.length < 3) return; // Ensure at least 3 characters before search

    // Cancel the previous request if it exists
    if (controller) {
      controller.abort();
    }

    // Create a new AbortController for the current request
    const newController = new AbortController();
    setController(newController);

    setLoading(true);
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
        signal: newController.signal, // Attach the abort signal
      });
      const data = await response.json();
      if (data.statusCode === 200) {
        setLocations(data.data);
      } else {
        console.error("Failed to fetch locations:", data.message);
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
    if (newQuery.length > 2) {
      handleSearch();
    } else {
      setLocations([]); // Clear locations if query is too short
    }
  };

  // Cleanup on component unmount or re-render to cancel any ongoing requests
  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md">
        <label htmlFor="location-input" className="block mb-2 text-sm font-medium text-gray-700">
          Search Location
        </label>

        <input
                          id="location-input"
                          type="text"
                          value={query}
                          onChange={handleInputChange}
                          placeholder="Type a city or region..."
                          
                        />
       
        {loading && <p className="text-sm text-gray-500 mt-2">Loading...</p>}
        
        <ul className="mt-2 bg-white border rounded-lg shadow-md max-h-60 overflow-y-auto">
          {query && locations.length === 0 && !loading ? (
            <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
          ) : (
            locations.map((location) => (
              <li
                key={location.fullName}
                className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                onClick={() => setQuery(location.fullName)}
              >
                {location.fullName}
              </li>
            ))
          )}
        </ul>


        <div className='relative'>
                <div
                    className={`w-full text-left flex py-1 px-2 border rounded cursor-pointer  overflow-y-auto`}>


                    {/* Display all selected developers with a close button */}
                    <div className='flex gap-x-2 z-50 flex-shrink-0'>
                        {locations.length  > 0 ? (
                            locations.map((dev, index) => (
                                <div key={index} className='border-[#82DFDF] border px-2 rounded max-h-fit flex flex-shrink-0'>
                                    <span className='flex items-center'>
                                        <span className='text-[#82DFDF]'>{dev.name}</span>
                                        <button
                                            
                                            className="ml-2 text-[#82DFDF]"
                                            title="Remove"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            ""
                        )}
                    </div>




                </div>

               
            </div>
      </div>
    </div>
  );
};

export default LocationSearch;
