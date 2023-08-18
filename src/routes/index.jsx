import { Route, Routes} from "react-router-dom"
import { RegisterPharmacy } from "../pages/registerPharmacy"
import { RegisterMedicine } from "../pages/registerMedicine"

function RoutersApp () {
    return (
        <Routes>
            <Route element={<RegisterPharmacy/>} path="/register-pharmacy" />
            <Route element={<RegisterMedicine/>} path="/register-medicine" />
        </Routes>
    )
}

export { RoutersApp }