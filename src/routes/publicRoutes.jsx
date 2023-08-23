import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/loginPage/login"

function PublicRoutes() {
    return(
        <Routes>
            <Route element={<Login />} path="/" />
        </Routes>
    )
}

export { PublicRoutes }