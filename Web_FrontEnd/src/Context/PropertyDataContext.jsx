import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NavBarContext = createContext();

export const PropertyDataProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const [PropertyData, setPropertyData] = useState({ listingType: "NEW" }); // Default state

    useEffect(() => {
        const queryParams = Object.fromEntries(searchParams.entries());
        const updatedQueryParams = Object.keys(queryParams).reduce((acc, key) => {
            if (key === "listingType") {
                acc[key] = queryParams[key];
            } else if (key === "name") {
                // Process "name" to remove the last word if necessary
                let words = queryParams[key].split(',');
                if (words.length > 1) {
                    words.pop(); // Remove the last word
                }
                acc[key] = words.join(','); // Join back as a string
            } else if (typeof queryParams[key] === 'string' && queryParams[key].includes(',')) {
                // Convert comma-separated strings to arrays
                acc[key] = queryParams[key].split(',');
            } else {
                // Wrap other query parameters in an array if they're not already
                acc[key] = Array.isArray(queryParams[key]) ? queryParams[key] : [queryParams[key]];
            }
            return acc;
        }, {});

        // Ensure listingType defaults to "NEW" if not in query params
        if (!updatedQueryParams.listingType) {
            updatedQueryParams.listingType = "NEW";
        }

        setPropertyData(updatedQueryParams);
    }, [searchParams]);

    return (
        <NavBarContext.Provider value={{ PropertyData, setPropertyData }}>
            {children}
        </NavBarContext.Provider>
    );
};


export const usePropertyData = () => {
    return useContext(NavBarContext);
};
