import { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme} from "@mui/material"
import Button from '@mui/material/Button';
import MedicationIcon from '@mui/icons-material/Medication';
import { DrawerComp } from "../drawer";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";



function Header () {
    const {logout} = useApp();
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const pages = [
        {
            route: "/register-pharmacy",
            description: "Register Pharmacy"
        },
        {
            route: "/register-medicine",
            description: "Register Medicine"
        },
        {
            route: "/registered-medicines",
            description: "Registered Medicines"
        },
        {
            route: "/",
            description: "Find Pharmacy"
        }
    ]
    return (
        <div>
            <AppBar sx={{background: "#2b5ba8"}}>
                <Toolbar>
                    <MedicationIcon fontSize="large"/>
                        {
                            isMatch ? (
                                <>
                                    <Typography>DevIn</Typography>
                                    <DrawerComp />
                                </>
                            ) : 
                            ( 
                            <>
                                <Typography>DevIn</Typography>
                                <Tabs
                                    sx={{marginLeft:"auto"}}
                                    textColor="inherit"
                                    value={false}
                                    onChange={(e, value)=> setValue(value)}>
                                    {
                                        pages.map(({route, description}, index) => {
                                            return (
                                                <Tab key={index} value={false} label={description} onClick={() => navigate(route)}/>
                                            )
                                        })
                                    } 
                                </Tabs>
                                <Button sx={{ marginLeft: "auto"}} variant="contained" color="error" onClick={logout}>Logout</Button>
                            </>
                            )
                        } 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export { Header }