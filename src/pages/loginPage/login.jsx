import { useState } from "react"
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { TextField, Typography, Button, Box } from "@mui/material";
import MedicationIcon from '@mui/icons-material/Medication';
import { Navigate, useNavigate } from "react-router";
import { useApp } from "../../hooks/useApp";
import { useForm } from "react-hook-form";

function Login () {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { setValue } = useApp();
    // const [ users, setUsers ] = useState([]);
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        company: "", 
        email:"", 
        password: ""
    });

    // const handleChange = (e) => {
    //     setInputs((prevState) => ({
    //         ...prevState,
    //         [e.target.name] : e.target.value
    //     }));
    // };

    // const onSubmit = (dataFromForm) => {
    //     setValue(dataFromForm)
    // }
    const onSubmit = (e) => {
        // e.preventDefault();
        // console.log(inputs);
        // setUsers(inputs)
        setValue(e);
        navigate("/")
    };

    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({name: "", company:"", email: "", password: ""})
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    backgroundColor="#f7f7f7"
                    display="flex" 
                    flexDirection={"column"} 
                    maxWidth={400} 
                    alignItems="center" 
                    justifyContent="center"
                    margin="auto"
                    marginTop={10}
                    marginBottom={10}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                        boxShadow:'10px 10px 20px #ccc'
                    }}}
                >
                    <MedicationIcon style={{ color: '#2b5ba8' }} fontSize="large"/>
                    <Typography
                    variant="h6"
                    padding={3}
                    textAlign="center">
                        {isSignup? "SIGN UP" : "LOGIN"}
                    </Typography>
                    {isSignup && <TextField 
                        name="name"
                        // value={inputs.name}
                        // onChange={handleChange}
                        margin="normal"
                        type={"name"}
                        variant="outlined"
                        placeholder="Insert your name"
                        required= {true}
                        {...register("name")}
                        /> 
                        }
                    {isSignup && <TextField 
                        name="company"
                        // value={inputs.company || ""}
                        // onChange={handleChange}
                        margin="normal"
                        type={"name"}
                        variant="outlined"
                        placeholder="Insert your company"
                        required= {true}
                        {...register("company")}
                        />
                        }

                    <TextField
                        name="email"
                        // value={inputs.email}
                        // onChange={handleChange}
                        margin="normal"
                        type={"email"}
                        variant="outlined"
                        placeholder="Insert your email"
                        required= {true}
                        {...register("email")}
                        />
                    <TextField
                        name="password"
                        // value={inputs.password}
                        // onChange={handleChange}
                        margin="normal"
                        type={"password"}
                        variant="outlined"
                        placeholder="Insert your password"
                        required= {true}
                        pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"
                        {...register("password")}
                        />
                    <Button 
                        endIcon= { isSignup ? <HowToRegIcon/> : <LoginIcon/> }
                        sx={{marginTop:3, borderRadius:3}}
                        variant="contained"
                        type="submit">
                            {isSignup ? 'Sign Up' : 'Login'}    
                    </Button>
                    <Button
                        onClick={resetState}
                        style={{ color: '#2b5ba8' }}
                        sx={{marginTop:3, borderRadius:3}}>
                            {isSignup ? "Change to Login" : "Don't have an account? Sign up"}
                    </Button>
                </Box>
            </form>

        </>
    )
}

export { Login }