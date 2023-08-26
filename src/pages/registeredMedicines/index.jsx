import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';


function RegisteredMedicines() {

    const [medicineList, setMedicinesList] = useState([]);

    useEffect(() => {
        const medicineList = JSON.parse(localStorage.getItem('newMedicine'));
        if (medicineList) {
            setMedicinesList(medicineList)
        }
    }, []);
    console.log(medicineList)


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
                                                <Typography gutterBottom variant="h6" component="div">
                                                {medicine.medicineName}
                                                </Typography>
                                                <Typography gutterBottom variant="h7" component="div">
                                                {medicine.lab}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                {medicine.description}
                                                </Typography>
                                                <Typography mt={2} variant="body2" color="text.secondary">
                                                Dosage: {medicine.dosage}
                                                </Typography>
                                                <Typography mt={3} variant="body2" color="text.secondary">R$ 
                                                {medicine.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                    <Button startIcon={<AddCircleOutlinedIcon />} size="large">Learn More</Button>
                                            </CardActions>
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