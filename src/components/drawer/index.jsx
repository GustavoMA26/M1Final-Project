import { useState } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemText, ListItemIcon, Button } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";

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

function DrawerComp() {
    const {logout} = useApp();
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                    {
                        pages.map(({route, description}, index) => {
                            return (
                            <ListItemButton key={index} onClick={() => setOpenDrawer(!true)}>
                                <ListItemIcon >
                                    <ListItemText onClick={() => navigate(route)} primary={description}/>
                                </ListItemIcon>
                            </ListItemButton>
                            )
                        })
                    }
                <ListItemIcon>
                    <Button sx={{ margin: 2}} variant="outlined" color="error" onClick={logout}>Logout</Button>
                </ListItemIcon>    

                </List>
            </Drawer>
            <IconButton sx={{color: 'white', marginLeft: 'auto'}}  onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
                
            
        </>

    )
}
export { DrawerComp }