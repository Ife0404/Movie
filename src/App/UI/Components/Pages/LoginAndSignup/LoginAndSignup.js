import React from "react";
import './LoginAndSignup.css';
import { HiUser } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


function LoginAndSignup() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/home');
    };

    return (
        <div className="LoginAndSignup">
            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <div className="image">
                            <HiUser />
                        </div>
                        <input type="text" placeholder="Name" />
                    </div>
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
                    <div className="submit">Sign Up</div>
                    <div className="submit" onClick={handleNavigation}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginAndSignup