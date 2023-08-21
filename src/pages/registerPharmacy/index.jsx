import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Header } from "../../components/header";

function RegisterPharmacy () {

    const { register, setValue, setFocus, handleSubmit } = useForm();

    const onSubmit = (e) => {
        let pharmaciesList = localStorage.getItem('newPharmacy')
        let usedLocalStorage = pharmaciesList ? JSON.parse(pharmaciesList) : [];
        usedLocalStorage.push(e)
        localStorage.setItem('newPharmacy', JSON.stringify(usedLocalStorage));
        alert(`Pharmacy ${company.value} registered with success`)
        }
        

    const checkZipcode = (e) => {
        console.log(e)
        const zipcode = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
        .then(response => response.json())
        .then(data => {
        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
        setFocus('addressNumber')
        })
    }
    return (
        <Header>
            <Container maxWidth="md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        display="flex" 
                        flexDirection={"row"}
                        alignItems="center" 
                        justifyContent="center"
                        margin="auto"
                        marginTop={5}
                        padding={3}
                        sx={{ display: 'flex', flexWrap: 'wrap' }}>   
                        <Typography
                            variant="h4"
                            padding={5}
                            textAlign="center">New Pharmacy
                        </Typography>      
                        <TextField
                            label ="Company Name"
                            id="company"
                            sx={{ m: 1, width: '25ch' }}
                            variant="filled"
                            margin="normal"
                            type={"text"}
                            name="company"
                            {...register("company", {
                                required: "Please fill out this field"})}                        
                        />
                        <TextField
                            label ="CNPJ"
                            id="CNPJ"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="cnpj" 
                            {...register("cnpj", {
                                required: "Please fill out this field"})}                
                        />
                        <TextField
                            label ="Trading Name"
                            id="tradingName"
                            sx={{ m: 1, width: '25ch' }}                            
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="tradingName"
                            {...register("tradingName", {
                                required: "Please fill out this field"})} 
                        />
                        <TextField
                            label ="Email"
                            id="email"
                            sx={{ m: 1, width: '25ch' }}  
                            margin="normal"
                            type={"email"}
                            variant="filled"
                            name="email"
                            {...register("email", {
                                required: "Please fill out this field"})} 
                        />
                        <TextField
                            id="phone"
                            label ="Phone Number"
                            sx={{ m: 1, width: '25ch' }}  
                            margin="normal"
                            type={"tel"}
                            variant="filled"
                            name="phone"
                            {...register("phone", {
                                required: "Please fill out this field"})} 
                        />
                        <TextField
                            id="mobile"
                            label ="Mobile Number"
                            sx={{ m: 1, width: '25ch' }}  
                            margin="normal"
                            type={"tel"}
                            variant="filled"
                            name="mobile"
                            {...register("mobile", {
                                required: "Please fill out this field"})} 
                        />
                        <TextField
                            label ="Zipcode"
                            id="zipcode"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="zipcode"
                            onBlur={checkZipcode}
                            {...register("zipcode", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="Street"
                            id="street"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="street"
                            {...register("street", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="Number"
                            id="addressNumber"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"number"}
                            variant="filled"
                            name="addressNumber"
                            {...register("addressNumber", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="Neighborhood"
                            id="neighborhood"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="neighborhood"
                            {...register("neighborhood", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="City"
                            id="city"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="city"
                            {...register("city", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="State"
                            id="state"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="state"
                            {...register("state", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="Complement"
                            id="complement"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="complement"
                            {...register("complement", {
                                required: false})}
                        />
                        <TextField
                            label ="Latitude"
                            id="latitude"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="latitude"
                            {...register("latitude", {
                                required: "Please fill out this field"})}
                        />
                        <TextField
                            label ="Longitude"
                            id="longitude"
                            sx={{ m: 1, width: '25ch' }}
                            margin="normal"
                            type={"text"}
                            variant="filled"
                            name="longitude"
                            {...register("longitude", {
                                required: "Please fill out this field"})}
                        />
                        <Button
                        sx={{marginTop:3, borderRadius:3}}
                        variant="contained"
                        type="submit"
                        >Register</Button>
                    </Box>    
                </form>
            </Container>      
        </Header>
    )
}

export { RegisterPharmacy }