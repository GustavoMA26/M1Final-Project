import { useState } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

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

function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemText>Login</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{color: 'white', marginLeft: 'auto'}}  onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
                
            
        </>

    )
}
export { DrawerComp }