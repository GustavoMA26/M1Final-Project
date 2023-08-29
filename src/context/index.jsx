import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext({});

function AppProvider({children}) {
    const { value, setValue } = useLocalStorage("user", {}); 
    // const { user, setUser } =  useState({});

    // useEffect(() => {
    //     if(value) {
    //         setUser(value)
    //     }
    // }, [setUser, value])

    const logout = () => {
        setValue({})
    }

    return (
        // value={{value, setValue, user, logout}}>
        <AppContext.Provider value={{value, setValue, logout}}> 
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}
