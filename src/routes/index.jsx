import { Route, Routes} from "react-router-dom"
import { RegisterPharmacy } from "../pages/registerPharmacy"
import { RegisterMedicine } from "../pages/registerMedicine"
import { Map } from "../pages/mapPage"
import { Login } from "../pages/loginPage/login"

function RoutesApp () {
    return (
        <Routes>
            <Route element={<Login />} path="/" />
            <Route element={<RegisterPharmacy/>} path="/register-pharmacy" />
            <Route element={<RegisterMedicine/>} path="/register-medicine" />
            <Route element={<Map />} path="/find-pharmacy" />
        </Routes>
    )
}

export { RoutesApp }