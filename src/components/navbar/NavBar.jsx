import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

import { IoIosPerson } from "react-icons/io";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";

function NavBar() {

    const onButtonClick = () => {
        const pdfUrl = "pdf/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
    };
    return (
        <nav className='navbar'>
            <div className="profile-title">
                <img src="img/profile.jpg" alt="proflie-img" />
                <h1>Nuttakitta Mongkhonsari</h1>
                <h2>Font-End Depveloper</h2>
                <NavLink onClick={onButtonClick}>Open Resume</NavLink>
            </div>
            <ul>
                <li>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    end>
                        <IoIosPerson size={25}/> 
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/project'
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    end>
                        <PiProjectorScreenChartBold size={25}/> 
                        Project
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    end>
                        <RiContactsFill size={25}/>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar