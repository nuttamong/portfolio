import React from 'react'
import '../css/Contact.css'
import { FaAddressCard } from "react-icons/fa6";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className='contact'>
            <h4><span>C</span>ontact</h4>
            <ul>
                <li>
                    <FaAddressCard />
                    <p>108/1 ถ.พโลรังฤทธิ์ ต.ในเมือง อ.เมือง จ.อุบลราชธานี</p>
                </li>
                <li>
                    <FcPhoneAndroid />
                    <p>09-9384-1921</p>
                </li>
                <li>
                    <MdEmail />
                    <p>nuttamong@kkumail.com</p>
                </li>
                <li>
                    <FaGithub />
                    <p><a href="https://github.com/nuttamong" target='_blank' rel="noreferrer">https://github.com/nuttamong</a></p>
                </li>
            </ul>
        </div>
    )
}

export default Contact()