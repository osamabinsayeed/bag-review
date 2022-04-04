import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav className='header'>
                <Link to="/home"><h5>Home</h5></Link >
                <Link to="/reviews"><h5>Reviews</h5></Link>
                <Link to="/dashboard"><h5>Dashboard</h5></Link>
                <Link to="/blogs"><h5>Blogs</h5></Link>
                <Link to="/about"><h5>About</h5></Link>
            </nav>
        </div>
    );
};

export default Header;