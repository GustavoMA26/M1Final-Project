import { useState } from "react"
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";

function Login () {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: "", 
        email:"", 
        password: ""
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({name: "", email: "", password: ""})
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box 
                    display="flex" 
                    flexDirection={"column"} 
                    maxWidth={400} 
                    alignItems="center" 
                    justifyContent="center"
                    margin="auto"
                    marginTop={25}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                        boxShadow:'10px 10px 20px #ccc'
                    }}}
                >
                    <Typography
                    variant="h6"
                    padding={3}
                    textAlign="center">
                        {isSignup? "Sign Up" : "Login"}
                    </Typography>
                    {isSignup && <TextField 
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        margin="normal"
                        type={"name"}
                        variant="outlined"
                        placeholder="Insert your name"
                        required= {true}
                        />
                    }
                    <TextField
                        name="email"
                        value={inputs.email}
                        onChange={handleChange}
                        margin="normal"
                        type={"email"}
                        variant="outlined"
                        placeholder="Insert your email"
                        required= {true}
                        />
                    <TextField
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                        margin="normal"
                        type={"password"}
                        variant="outlined"
                        placeholder="Insert your password"
                        required= {true}
                        pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"
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
                        sx={{marginTop:3, borderRadius:3}}>
                            {isSignup ? "Change to Login" : "Don't have an account? Sign up"}
                    </Button>
                </Box>
            </form>

        </>
    )
}

export { Login }