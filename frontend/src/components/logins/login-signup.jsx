import React, { useState } from 'react';
import './login-signup.css';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <input type="text" placeholder='Name'/>
                </div>}
                
                <div className="input">
                    <input type="email" placeholder='Email Address'/>
                </div>
                <div className="input">
                    <input type="Password" placeholder="Password"/>
                </div>
            </div>
            {/* hide forgot password if not in view */}
            {action === "Sign Up"? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
            {/* <div className="forgot-password">Forgot Password? <span>Click Here</span></div> */}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

        </div>
    );
};

export default LoginSignup;
