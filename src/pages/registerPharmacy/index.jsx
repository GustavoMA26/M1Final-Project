import { TextField, Typography, Grid, Divider, Chip, Button, Container, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { useState, useEffect } from "react";

function RegisterPharmacy () {

    const { register, setValue, setFocus, handleSubmit, reset } = useForm();
    const [user, setUser] = useState(null);

    useEffect(() => {
        reset(user);
    }, [user]);

    const onSubmit = (e) => {
        let pharmaciesList = localStorage.getItem('newPharmacy')
        let usedLocalStorage = pharmaciesList ? JSON.parse(pharmaciesList) : [];
        usedLocalStorage.push(e)
        localStorage.setItem('newPharmacy', JSON.stringify(usedLocalStorage));
        alert(`Pharmacy ${company.value} registered with success`);
        reset();
        }
        

    const checkZipcode = (e) => {
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
    <>
        <Header />
            <Main >
                <Container maxWidth="lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                textAlign="center">New Pharmacy
                            </Typography>   
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={1} > 
                                <Grid item xs={4}>
                                    <TextField
                                        label ="Company Name"
                                        id="company"
                                        sx={{ m: 1, width: '100%' }}
                                        variant="filled"
                                        margin="normal"
                                        type={"text"}
                                        name="company"
                                        required
                                        {...register("company")}                        
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="CNPJ"
                                        id="CNPJ"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="cnpj" 
                                        required
                                        {...register("cnpj")}                
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="Trading Name"
                                        id="tradingName"
                                        sx={{ m: 1, width: '100%' }}                            
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="tradingName"
                                        required
                                        {...register("tradingName")} 
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="Email"
                                        id="email"
                                        sx={{ m: 1, width: '100%' }}  
                                        margin="normal"
                                        type={"email"}
                                        variant="filled"
                                        name="email"
                                        required
                                        {...register("email")} 
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="phone"
                                        label ="Phone Number"
                                        sx={{ m: 1, width: '100%' }}  
                                        margin="normal"
                                        type={"tel"}
                                        variant="filled"
                                        name="phone"
                                        {...register("phone")} 
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        id="mobile"
                                        label ="Mobile Number"
                                        sx={{ m: 1, width: '100%' }}  
                                        margin="normal"
                                        type={"tel"}
                                        variant="filled"
                                        name="mobile"
                                        required
                                        {...register("mobile")} 
                                    />
                                </Grid>
                            </Grid>
                        </Box>                            
                        <Divider  style={{width:'100%'}}>
                            <Chip label="ADDRESS" />
                        </Divider>
                        <Box
                            display="flex" 
                            flexDirection={"row"}
                            alignItems="center" 
                            justifyContent="center"
                            margin="auto"
                            marginTop={1}
                            padding={3}
                            sx={{ display: 'flex', flexWrap: 'wrap' }}>

                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={1} > 
                                <Grid item xs={2}>                           
                                    <TextField
                                        label ="Zipcode"
                                        id="zipcode"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="zipcode"
                                        required
                                        onBlur={checkZipcode}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={4}>                            
                                    <TextField
                                        label ="Street"
                                        id="street"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="street"
                                        required
                                        {...register("street")}
                                        InputLabelProps={{
                                                shrink: true,
                                            }}
                                    />
                                </Grid>
                                <Grid item xs={2}> 
                                    <TextField
                                        label ="Number"
                                        id="addressNumber"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"number"}
                                        variant="filled"
                                        name="addressNumber"
                                        required
                                        {...register("addressNumber")}
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="Complement"
                                        id="complement"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="complement"
                                        {...register("complement", {
                                            required: false})}
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>
                                <Grid item xs={4}> 
                                    <TextField
                                        label ="Neighborhood"
                                        id="neighborhood"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="neighborhood"
                                        required
                                        {...register("neighborhood")}
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="City"
                                        id="city"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="city"
                                        required
                                        {...register("city")}
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="State"
                                        id="state"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="state"
                                        required
                                        {...register("state")}
                                        InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="Latitude"
                                        id="latitude"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="latitude"
                                        required
                                        {...register("latitude")}                              
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label ="Longitude"
                                        id="longitude"
                                        sx={{ m: 1, width: '100%' }}
                                        margin="normal"
                                        type={"text"}
                                        variant="filled"
                                        name="longitude"
                                        required
                                        {...register("longitude")}
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
                            >Reset</Button>
                        </Box>    
                    </form>
                </Container>
            </Main>
        </>     
    )
}

export { RegisterPharmacy }