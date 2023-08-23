import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';




function RegisterMedicine () {

    const { register, handleSubmit } = useForm();

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
    
    const onSubmit = (e) => {  
        let medicinesList = localStorage.getItem('newMedicine')
        let usedLocalStorage = medicinesList ? JSON.parse(medicinesList) : [];
        usedLocalStorage.push(e)
        localStorage.setItem('newMedicine', JSON.stringify(usedLocalStorage));
        alert(`Medicine ${medicineName.value} registered with success`);
        window.location.reload(false);
    }

    return (
        <>
            <Header />
                <Main>
                    <Container maxWidth="md">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Box
                                display="flex" 
                                flexDirection={"column"}
                                alignItems="center" 
                                justifyContent="center"
                                margin="auto"
                                marginTop={5}
                                padding={3}
                                sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Typography
                                    variant="h4"
                                    padding={5}
                                    textAlign="center">New Medicine
                                </Typography>   
                                <TextField
                                    label ="Medicine Name"
                                    id="medicineName"
                                    sx={{ m: 1, width: '25ch' }}
                                    type={"text"}
                                    {...register("medicineName", {
                                        required: "Please fill out this field"})}                               
                                    />
                                <TextField
                                    label ="Lab"
                                    sx={{ m: 1, width: '25ch' }}
                                    type={"text"}
                                    id="lab" 
                                    {...register("lab", {
                                        required: "Please fill out this field"})}                
                                />
                                <TextField
                                    label ="Dosage"
                                    sx={{ m: 1, width: '25ch' }}
                                    type={"text"}
                                    id="dosage"
                                    {...register("dosage", {
                                        required: "Please fill out this field"})} 
                                />
                                <TextField
                                    label="Description"
                                    sx={{ m: 1, width: '25ch' }}
                                    id="description" 
                                    multiline rows={4}                          
                                    {...register("description", {
                                        required: "Please fill out this field"})} 
                                />
                                <TextField
                                    label ="Price per Unit"
                                    sx={{ m: 1, width: '25ch' }}
                                    type={"text"}
                                    id="price"
                                    {...register("price", {
                                        required: "Please fill out this field"})} 
                                />
                                <TextField
                                    sx={{ m: 1, width: '25ch' }}
                                    select
                                    id="type"
                                    label="Select type"
                                    {...register("type", {
                                        required: "Please fill out this field"})} 
                                >
                                    {types.map((option) => (
                                    <MenuItem key={option.value || ''} value={option.value || ''}>{option.label || ''}
                                    </MenuItem>))}

                                </TextField>
                                <Button
                                sx={{marginTop:3, borderRadius:3}}
                                variant="contained"
                                type="submit"
                                >Register</Button>
                            </Box>
                        </form>
                    </Container>
                </Main>
        </>
    )
}

export { RegisterMedicine }