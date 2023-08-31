import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import { TextField, Typography, Grid, MenuItem, Button, Box, Divider, Chip, InputAdornment } from "@mui/material";
import { useState, useEffect } from "react";

function RegisterMedicine () {

    const { register, handleSubmit, reset } = useForm();
    const [medicine, setMedicine] = useState(null);

    const types = [
        {
          value: 'General',
          label: 'General',
        },
        {
          value: 'Controlled',
          label: 'Controlled',
        }
    ]

    useEffect(() => {
        reset(medicine);
    }, [medicine]);

    
    const onSubmit = (e) => {  
        let medicinesList = localStorage.getItem('newMedicine')
        let usedLocalStorage = medicinesList ? JSON.parse(medicinesList) : [];
        usedLocalStorage.push(e)
        localStorage.setItem('newMedicine', JSON.stringify(usedLocalStorage));
        alert(`Medicine ${medicineName.value} registered with success`);
        reset();
    }

    return (
        <>
            <Header />
                <Main>
                    <Container maxWidth="lg">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Box
                                display="flex" 
                                flexDirection={"row"}
                                alignItems="center" 
                                justifyContent="center"
                                margin="auto"
                                marginTop={2}
                                padding={3}
                                sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Typography
                                    variant="h4"
                                    padding={5}
                                    textAlign="center">New Medicine
                                </Typography>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={1} > 
                                    <Grid item xs={6}>      
                                        <TextField
                                            label ="Medicine Name"
                                            id="medicineName"
                                            sx={{ m: 1, width: '100%' }}
                                            variant="filled"
                                            required
                                            type={"text"}
                                            {...register("medicineName")}                               
                                            />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            label ="Lab"
                                            sx={{ m: 1, width: '100%' }}
                                            variant="filled"
                                            required
                                            type={"text"}
                                            id="lab" 
                                            {...register("lab")}                
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            label ="Dosage"
                                            sx={{ m: 1, width: '100%' }}
                                            variant="filled"
                                            required
                                            type={"text"}
                                            id="dosage"
                                            {...register("dosage")} 
                                        />
                                    </Grid>
                                    <Grid item xs={3}> 
                                        <TextField
                                            sx={{ m: 1, width: '100%' }}
                                            variant="filled"
                                            required
                                            select
                                            id="type"
                                            label="Select type"
                                            {...register("type")} 
                                        >
                                            {types.map((option) => (
                                            <MenuItem key={option.value || ''} value={option.value || ''}>{option.label || ''}
                                            </MenuItem>))}  
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            label ="Price per Unit"
                                            sx={{ m: 1, width: '100%' }}
                                            variant="filled"
                                            required
                                            type={"number"}
                                            id="price"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">R$</InputAdornment>
                                                )
                                            }}
                                            {...register("price")} 
                                        />
                                    </Grid>
                                    <Divider sx={{mt:2}} style={{width:'100%'}}>
                                        <Chip label="DESCRIPTION" />
                                    </Divider>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Description"
                                            sx={{ m: 1, width: '100%' }}
                                            variant="filled"
                                            required
                                            id="description" 
                                            multiline rows={4}                          
                                            {...register("description")} 
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                sx={{marginTop:3, borderRadius:3}}
                                variant="contained"
                                type="submit"
                                >Register</Button>
                                <Button
                                    sx={{marginTop:3, marginLeft:3, borderRadius:3}}
                                    variant="outlined"
                                    type="button"
                                    color="error"
                                    onClick={() => reset()} 
                                    >Reset
                                </Button>
                            </Box>
                        </form>
                    </Container>
                </Main>
        </>
    )
}

export { RegisterMedicine }