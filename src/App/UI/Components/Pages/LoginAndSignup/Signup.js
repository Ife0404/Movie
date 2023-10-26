import React, { useState } from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle, AiFillApple, AiFillGithub } from 'react-icons/ai'
import Button from "../../Button/Button";


function Signup() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    };

    return (
        <div className="Signup">
            <div className="vessel">
                <div className="vessel-content">
                    <div className="title">
                        <h2 className="word">SIGNUP</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="Inputs">
                        <div className="inputs">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="inputs">
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="inputs">
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-container">
                        <Button type="button" text={"Signup"} className="submit" onClick={handleLogin} />
                        <Button type="button" text={"Already have an account? Login"} className="submit" onClick={handleLogin} />
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

export default Signup