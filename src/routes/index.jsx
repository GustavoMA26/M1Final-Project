import { useApp } from "../hooks/useApp";
import { PrivateRoutes } from "./privateRoutes"
import { PublicRoutes } from "./publicRoutes"

function RoutesApp () {
    const { value } = useApp();

    if(value?.email) {
       return <PrivateRoutes />
    } 
        return (
            <PublicRoutes />
    )
}

export { RoutesApp }