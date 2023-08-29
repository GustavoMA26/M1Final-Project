import { useContext } from "react";
import { AppContext } from "../context/index";


function useApp() {
    const context = useContext(AppContext)

    if(!context) {
        throw new Error ("The application is not inside an AppProvider")
    }
    return context

}

export {useApp}