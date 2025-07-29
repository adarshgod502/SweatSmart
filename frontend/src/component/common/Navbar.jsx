import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

function Navbar() {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to log out?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">SweatSmart</NavLink>
            </div>
            <ul className="navbar-ul">
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            <li><NavLink to="/world" activeclassname="active">Gym List</NavLink></li>
                <li><NavLink to="/home" activeclassname="active">Search Session</NavLink></li>
                <li><NavLink to="/venues" activeclassname="active">Gym Place</NavLink></li>
                <li><NavLink to="/my-bookings" activeclassname="active">My Bookings</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated && <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                {!isAuthenticated && <li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
            </ul>
        </nav>
    );
}

export default Navbar;
