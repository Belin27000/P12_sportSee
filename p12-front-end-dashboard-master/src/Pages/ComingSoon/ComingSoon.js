import React from 'react';
import Logo from '@/Assets/Logo.png'
import '@/Pages/ComingSoon/comingSoon.css'
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className='CommingSoon'>
            <Link to="/home">
                <img src={Logo} alt="Sportsee application logo" />
                <h2 className='CsTitle'>COMING SOON</h2>
                <div className='CsMessage'>We are building this page</div>
            </Link>
        </div>
    );
};

export default ComingSoon;