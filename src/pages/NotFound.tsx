import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div>
            <p>Not Found Page</p>
            <Link to="/">Main page</Link>
        </div>
    );
}

export default NotFound;