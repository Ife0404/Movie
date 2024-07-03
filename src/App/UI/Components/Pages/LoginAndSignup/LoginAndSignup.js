import React, { useState } from "react";
import './LoginAndSignup.css';
import { AiFillGoogleCircle, AiFillApple, AiFillGithub } from 'react-icons/ai'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Button from "../../Button/Button";


function LoginAndSignup() {

    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // // Function to handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Check if the form is properly filled (you can add your own validation logic here)
    //     if (!isFormValid()) {
    //         setIsFormSubmitted(true);
    //     } else {
    //         // Continue with your form submission logic
    //         // For example, navigate to another page
    //     }
    // };

    // // Function to check if the form is properly filled (add your own validation logic here)
    // const isFormValid = () => {
    //     // Add your form validation logic here
    //     // Return true if the form is valid; otherwise, return false
    //     return true; // Modify this according to your validation logic
    // };

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/home');
    };

    const handleSignup = () => {
        navigate('/signup')
    }

    return (
        <div className="LoginAndSignup">
            <div className="container">
                <div className="container-content">
                    {/* {isFormSubmitted && !isFormValid() && (
                        <div className="error-popup">
                            Please fill in all required fields.
                        </div>
                    )} */}
                    <div className="header">
                        <h2 className="text">LOGIN</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <div className="image">
                                <MdEmail />
                            </div>
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="input">
                            <div className="image">
                                <RiLockPasswordFill />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="forgot-password">Forgot password?</div>
                    <div className="submit-container">
                        <Button className="submit" text={"Login"} onClick={handleNavigation}>Login</Button>
                        <Button className="submit" text={"Don't have account? Sign Up"} onClick={handleSignup}>Sign Up</Button>
                    </div>

                    <div className="social-networks">
                        <div>
                            <AiFillGoogleCircle />
                        </div>
                        <div>
                            <AiFillApple />
                        </div>
                        <div>
                            <AiFillGithub />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginAndSignup