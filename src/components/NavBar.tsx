import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="nav">
            <Link to="/home">Home</Link>
        </div>
    );
}

export default NavBar;