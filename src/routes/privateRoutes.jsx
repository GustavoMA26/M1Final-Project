import { Route, Routes } from "react-router-dom";
import { RegisterPharmacy } from "../pages/registerPharmacy"
import { RegisterMedicine } from "../pages/registerMedicine"
import { RegisteredMedicines } from "../pages/registeredMedicines"
import { Map } from "../pages/mapPage"

function PrivateRoutes() {
    return(
        <Routes>
            <Route element={<RegisterPharmacy/>} path="/register-pharmacy" />
            <Route element={<RegisterMedicine/>} path="/register-medicine" />
            <Route element={<RegisteredMedicines />} path="/registered-medicines" />
            <Route element={<Map />} path="/find-pharmacy" />
        </Routes>
    )
}

export { PrivateRoutes }