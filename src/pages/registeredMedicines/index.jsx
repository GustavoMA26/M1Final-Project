import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useEffect, useState } from "react";
import {Card, CardContent, CardMedia, Typography, Container, Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { BasicModal } from "../../components/modal";


function RegisteredMedicines() {

    const [medicineList, setMedicinesList] = useState([]);

    useEffect(() => {
        const medicineList = JSON.parse(localStorage.getItem('newMedicine'));
        if (medicineList) {
            setMedicinesList(medicineList)
        }
    }, []);

    return (
        <>
        <Header />
            <Main>
                <Container maxWidth="lg">
                    <Box 
                    alignItems={"center"}
                    justifyContent={"center"}
                    margin={"auto"}
                    marginTop={5}
                    padding={3}
                    sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h4"
                            padding={5}
                            textAlign="center">Registered Medicines
                        </Typography>   
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                            medicineList.map((medicine, index) => {
                                return (
                                    <Grid item xs={2} sm={4} md={4} key={index}>                
                                        <Card  sx={{ maxWidth: 320 }}>
                                            <CardMedia
                                                component="img"
                                                alt={medicine.medicineName}
                                                height="210"
                                                // sx={{width:"200"}}
                                                image="https://st2.depositphotos.com/15928480/43854/i/450/depositphotos_438546340-stock-photo-multicolor-tablets-and-pills-capsules.jpg"
                                            />
                                                <CardContent>
                                                {medicine.medicineName}
                                                    <BasicModal>
                                                    <Typography variant="h6" color="text.primary">
                                                        NAME: {medicine.lab}
                                                        </Typography>  
                                                        <Typography mt={2} variant="h6" color="text.primary">
                                                        LAB: {medicine.lab}
                                                        </Typography>                       
                                                        <Typography mt={2} variant="body1" color="text.secondary">
                                                        DESCRIPTION: {medicine.description}
                                                        </Typography>
                                                        <Typography mt={2} variant="body2" color="text.secondary">
                                                        DOSAGE: {medicine.dosage}
                                                        </Typography>
                                                        <Typography mt={2} variant="h6" color="text.primary"> 
                                                        R${medicine.price}
                                                        </Typography>                                                        
                                                    </BasicModal>
                                                </CardContent>                                            
                                        </Card>
                                    </Grid>  
                                    )
                                })  
                            }
                        </Grid>
                    </Box>
                </Container> 
            </Main>
        </>

    )

}

export {RegisteredMedicines}