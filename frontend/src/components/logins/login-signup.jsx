
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-signup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogin = () => {
    // Check login logic here

    // For this example, let's assume a successful login
    if (email === 'user@example.com' && password === 'password') {
      navigate('/home'); // Redirect to the homepage
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <input type="text" placeholder='Name' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>}

        <div className="input">
          <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      {/* hide forgot password if not in view */}
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
      <div className="submit-container">
        {/* Change btn colors with states */}
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Sign Up</div>
      </div>
    </div>
  );
};

export default LoginSignup;


// ===================================================================
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import './login-signup.css';

// const LoginSignup = () => {
//   const [action, setAction] = useState("Login");
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Use useNavigate for navigation

//   const handleLogin = () => {
    
//     // For this example, let's assume successful login
//     if (email === 'user@example.com' && password === 'password') {
//       navigate('/home'); // Redirect to the homepage
//     }
//   };

//   return (
//     <div className="container">
//         <div className="header">
//             <div className="text">{action}</div>
//             <div className="underline"></div>
//         </div>
//         <div className="inputs">
//             {action === "Login" ? <div></div> : <div className="input">
//                 <input type="text" placeholder='Name'/>
//             </div>}
            
//             <div className="input">
//                 <input type="email" placeholder='Email Address'/>
//             </div>
//             <div className="input">
//                 <input type="Password" placeholder="Password"/>
//             </div>
//         </div>
//         {/* hide forgot password if not in view */}
//         {action === "Sign Up"? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
//         {/* <div className="forgot-password">Forgot Password? <span>Click Here</span></div> */}
//         <div className="submit-container">
//             <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//             <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
//         </div>

//         </div>
//   );
// };

// export default LoginSignup;


// ===================================================================
// import React, { useState } from 'react';
// import './login-signup.css';

// const LoginSignup = () => {

//     const [action, setAction] = useState("Login");

//     return (
//         <div className="container">
//             <div className="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action === "Login" ? <div></div> : <div className="input">
//                     <input type="text" placeholder='Name'/>
//                 </div>}
                
//                 <div className="input">
//                     <input type="email" placeholder='Email Address'/>
//                 </div>
//                 <div className="input">
//                     <input type="Password" placeholder="Password"/>
//                 </div>
//             </div>
//             {/* hide forgot password if not in view */}
//             {action === "Sign Up"? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
//             {/* <div className="forgot-password">Forgot Password? <span>Click Here</span></div> */}
//             <div className="submit-container">
//                 <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//                 <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
//             </div>

//         </div>
//     );
// };

// export default LoginSignup;
