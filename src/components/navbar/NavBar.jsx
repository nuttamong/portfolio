import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

import { IoIosPerson } from "react-icons/io";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const onButtonClick = () => {
        const pdfUrl = "pdf/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleSidebar}>
                {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>

            {/* Sidebar */}
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="profile-title">
                    <img src="img/profile.jpg" alt="proflie-img" />
                    <h1>Nuttakitta Mongkhonsari</h1>
                    <h2>Front-End Developer</h2>
                    <NavLink onClick={onButtonClick}>Open Resume</NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <IoIosPerson size={25}/> 
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/project' className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <PiProjectorScreenChartBold size={25}/> 
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')} end>
                            <RiContactsFill size={25}/>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
