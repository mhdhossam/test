import "../CSS/Login.css"; 
import "../CSS/Home.css";
import React, { useState, FormEvent } from 'react'; // Import FormEvent for form handling
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from "../../assets/images/logoFina2.png";
import Swal from "sweetalert2"; // Use SweetAlert for notifications
import axios from "axios"; // Using axios for API requests is generally preferred.

export const Register: React.FC = () => {
    const [username, setUserName] = useState<string>(''); // Type state as string
    const [password, setPassword] = useState<string>(''); // Type state as string
    const [showPassword, setShowPassword] = useState<boolean>(false); // Type state as boolean
    const [error, setError] = useState<string | null>(null); // Error state can either be a string or null
    // const navigate = useNavigate();

    const handleRegister = async (e: FormEvent) => { // Type the event as FormEvent
        e.preventDefault();
        setError(null); // Reset error state on submit

        const requestBody = { username, password }; // Create request body

        try {
            const response = await axios.post('https://daleel-back.zeeploy.xyz/api/register/', requestBody);

            if (response.status === 201) { // Check for successful response
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful",
                    text: "You have successfully registered!",
                });
                 //navigate("/login"); // Redirect to login
            }
        } catch (err) {
            setError('Registration failed'); // Set error state
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: "Please check your input and try again.",
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <div className="containerrrr">
            <div className="login-register-container">
                <div className='form-cont'>
                    <div className="logoo">
                        <img src={logo} alt="Logo" />
                        <h1>Register</h1>
                        <h2>Welcome, please create an account to <span>continue</span></h2>
                    </div>
                    <form method='post' onSubmit={handleRegister}>
                        <div className="form-field-wrapper">
                            <input
                                required
                                type="text"
                                name="username"
                                id='username'
                                placeholder="Username*"
                                value={username} // Corrected value to use username state
                                onChange={(e) => setUserName(e.target.value)} // Use setUserName for state update
                                aria-label="Username"
                            />
                        </div>

                        <div className="form-field-wrapper">
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter password*"
                                autoComplete="current-password"
                                value={password} // Corrected value to use password state
                                onChange={(e) => setPassword(e.target.value)} // Use setPassword for state update
                                aria-label="Password"
                            />
                        </div>

                        <div className="form-field-wrapper">
                            <Button className="btnn" type="submit" variant="contained">Register</Button>
                        </div>

                        <div className='forget-password'>
                            <div className='checkbox'>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={togglePasswordVisibility}
                                    />
                                </label>
                                <span>Show password</span>
                            </div>
                        </div>

                        {error && <p className="error-message">{error}</p>} {/* Display error message */}
                    </form>
                    <p className='text-login'>Do you have an account? <span><Link to="/login">Login</Link></span></p>
                </div>
            </div>
        </div>
    );
}
