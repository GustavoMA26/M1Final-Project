import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                {
                medicineList.map((medicine, index) => {
                    return (
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                alt="tagAlt"
                                height="140"
                                image="https://media.istockphoto.com/id/1163603389/photo/amber-pharmacy-vials-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=h5eS9k-ebxlA_rvgsfIWN8FVjv3iM17BEgls8FCYnRI="
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {medicine.medicineName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {medicine.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                    <Button size="large">Learn More</Button>
                            </CardActions>
                        </Card>
                    )
                }
                
                
                )


                }
                
            </Main>
        </>

    )

}

export {RegisteredMedicines}