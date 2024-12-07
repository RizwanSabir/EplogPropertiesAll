// NavBarContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const [User, setUser] = useState(["New Projects", "NEW"]); // Set a default value

    useEffect(() => {
        const queryParams = Object.fromEntries(searchParams.entries());
      

        if (queryParams?.listingType) {
            const data = queryParams.listingType === "NEW" ? ["New Projects", "NEW"]
                : queryParams.listingType === "BUY" ? ["Buy", "SELL"]
                : ["Rent", "RENT"];
            setUser(data);
        }
    }, [searchParams]);

    return (
        <NavBarContext.Provider value={{ User,setUser }}>
            {children}
        </NavBarContext.Provider>
    );
};

export const useNavBar = () => {
    return useContext(NavBarContext);
};



