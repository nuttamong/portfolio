import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

import { IoIosPerson } from "react-icons/io";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";

function NavBar() {
    return (
        <nav className='navbar'>
            <div className="profile-title">
                <img src="img/profile.jpg" alt="proflie-img" />
                <h1>Nuttakitta Mongkhonsari</h1>
                <h2>Font-End Depveloper</h2>
            </div>
            <ul>
                <li>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <IoIosPerson size={25}/> 
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/project'
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <PiProjectorScreenChartBold size={25}/> 
                        Project
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <RiContactsFill size={25}/>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar