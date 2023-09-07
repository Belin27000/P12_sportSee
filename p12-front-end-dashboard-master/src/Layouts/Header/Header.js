import React from 'react';
import Logo from '@/Assets/Images/Logo.png'
import { Link } from 'react-router-dom';
import '@/Layouts/Header/header.css'
const Header = () => {
    return (
        <header className='Header'>
            <div className='Logo'>
                <img src={Logo} alt="Sportsee application logo" />
                <p className='AppName'>SportSee</p>
            </div>
            <nav className='NavBar'>
                <ul>

                    <li className='NavLink'><Link to="/home">Acceuil</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Profil</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Réglage</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Communauté</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 