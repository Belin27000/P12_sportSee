import React from 'react';
import { Link } from 'react-router-dom';
import Yoga from '@/Assets/Yoga.png'
import Swim from '@/Assets/Swim.png'
import Bycicle from '@/Assets/Bycicle.png'
import Fitness from '@/Assets/Fitness.png'
import '@/Layouts/SideMenu/sideMenu.css'

const SideMenu = () => {
    return (

        <aside className='SideMenu'>
            <div className='SideMenuIcons'>
                <ul>
                    <li className='SideNav'><Link to="/ComingSoon"><img src={Yoga} alt='SideBar Yoga logo' /></Link></li>
                </ul>
                <ul>
                    <li className='SideNav'><Link to="/ComingSoon"><img src={Swim} alt='SideBar Yoga logo' /></Link></li>
                </ul>
                <ul>
                    <li className='SideNav'><Link to="/ComingSoon"><img src={Bycicle} alt='SideBar Yoga logo' /></Link></li>
                </ul>
                <ul>
                    <li className='SideNav'><Link to="/ComingSoon"><img src={Fitness} alt='SideBar Yoga logo' /></Link></li>
                </ul>

            </div>
            <div className='SideMenuCopy'>
                Copiryght, SportSee 2020
            </div>
        </aside>
    );
};

export default SideMenu;