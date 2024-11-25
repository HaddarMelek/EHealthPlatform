import { createContext } from "react";
import { doctors } from "../assets/assets"; 
import { patients } from "../assets/assets"; 
export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = 'TND';

    const value = {
        doctors: doctors || [],  
        patients: patients || [], 
        currencySymbol,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
