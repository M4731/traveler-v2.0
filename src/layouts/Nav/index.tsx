import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav
            style ={{ 
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '2rem',
                backgroundColor: '#cccccc',
            }}
        >
            <Link to="/">Home page</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
        </nav>
    )
}

export default Nav