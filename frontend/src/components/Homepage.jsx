import React from 'react';
import { Link } from 'react-router-dom';
// import './Homepage.css';


const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/login">Back to Login Page</Link>
        </div>
    );
}

export default Homepage;