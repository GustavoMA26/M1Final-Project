import { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme} from "@mui/material"
import Button from '@mui/material/Button';
import MedicationIcon from '@mui/icons-material/Medication';
import { DrawerComp } from "../drawer";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/base";


function Header () {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

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
            route: "/find-pharmacy",
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
                            ) : ( 
                                <>
                                <Tabs
                                textColor="inherit"
                                value={value}
                                onChange={(e, value)=> setValue(value)} 
                                indicatorColor="secondary">

                     {
                        pages.map(({route, description}) => {
                            return (
                                <Tab key={description}>
                                    <Link to={route}>{description}</Link>
                                </Tab>
                            )
                        })
                    } 
                    </Tabs>
                                {/* <Tab label = "Register Pharmacy" />
                                <Tab label = "Register Medicine" />
                                <Tab label = "Find Pharmacy" /> */}
                                
                                <Button>Hello</Button>
                                </>
                                )
                        }

                     {/* {
                        pages.map(({route, description}) => {
                            return (
                                <MenuItem key={description}>
                                <Link className="nav-link" to={route}>{description}</Link>
                                </MenuItem>
                            )
                        })
                    }  */}
                    
                </Toolbar>
                
            </AppBar>
        </div>


    )
}

export { Header }