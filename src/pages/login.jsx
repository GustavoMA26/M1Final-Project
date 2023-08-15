import { useState } from "react"

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label 
                    htmlFor= "email"
                    />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Insert your email here"
                    type="email"
                    name="email"
                    required= "true"
                    />
                <label 
                    htmlFor= "password"
                    />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="Insert your password here"
                    type="password"
                    name="password"
                    required= "true"
                    pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"                    
                    />
                <button type="submit">Log In</button>
            </form>
            <a href="#">Don't have an account yet? Register here!</a>
        </>
    )
}

export { Login }