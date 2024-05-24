import { useState,createContext,useContext } from "react";

const AlertContext = createContext();

const AlertProvider = ({children}) => {
    const [alert,setAlert] = useState({});
    return (
        <AlertContext.Provider value={{alert,setAlert}}>
            {children}
        </AlertContext.Provider>
    );
}

const useAlert = () => {
    return useContext(AlertContext);
}

export {AlertProvider,useAlert};