import React from 'react';
import './login-signup.css';

const LoginSignup = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text"></div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    {/* <img src="" alt=""/> */}
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input">
                    {/* <img src="" alt=""/> */}
                    <input type="email" placeholder='Email Address'/>
                </div>
                <div className="input">
                    {/* <img src="" alt=""/> */}
                    <input type="Member" placeholder='Member'/>
                </div>
                <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>
            </div>

        </div>
    );
};

export default LoginSignup;
