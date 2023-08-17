import { Route, Routes} from "react-router-dom"
import { RegisterPharmacy } from "../pages/registerPharmacy"

function RoutersApp () {
    return (
        <Routes>
            <Route element={<RegisterPharmacy/>} path="/register-pharmacy" />
        </Routes>
    )
}

export { RoutersApp }