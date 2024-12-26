import React from 'react'
import '../css/Project.css'
import ReactPlayer from 'react-player/youtube'
import firebaseAuthProject from '../img/firebaseAuthLogin.png';
import aemi from '../img/aemi.png';

function Project() {
    return (
        <div className='project'>
            <h4><span>P</span>roject</h4>
            <ul>
                <li>
                    <h5>ระบบเช่าหอพัก</h5>
                    <ReactPlayer 
                        url='https://youtu.be/4k50fkNPSZw' 
                        width="80vh"/>
                    <ul>
                        <li>
                            <p>โปรเจค ระบบเช่าหอพัก</p>
                        </li>
                        <li>
                            <p>ในตัวโปรเจคนี้จะเป็นการจัดการข้อมูลต่างๆ เกี่ยวกับหอพักของ เจ้าของหอพัก ตามในคลิปวิดีโอ
                            </p>
                        </li>
                        <li>
                            <p>เครื่องมือที่ใช้มี PHP, MySql, Bootstrap, Html
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Aemi's Thai Massage</h5>
                    <img src={aemi} alt="aemi'sthaimassage"/>
                    <ul>
                        <li>
                            <a href='https://aemi-sthaimassage.web.app/' target='_blank' rel="noreferrer">เว็บ Aemi's Thai Massage</a>
                        </li>
                        <li>
                            <a href='https://github.com/nuttamong/aemithaimassage' target='_blank' rel="noreferrer">Github: https://github.com/nuttamong/aemithaimassage</a>
                        </li>
                        <li>
                            <p>เว็บไซต์นี้ เป็นเว็บไซต์ที่ผมเขียนให้กับลูกค้าที่ทำร้านนวดแผนไทย
                            </p>
                        </li>
                        <li>
                            <p>เครื่องมือที่ใช้มี ReactJS, Bootstrap, firebase hosting
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Space Time</h5>
                    <ReactPlayer 
                        url='https://youtu.be/7RejodGp9v4' 
                        width="80vh"/>
                    <ul>
                        <li>
                            <a href='https://django-tailwind-nasaapi-g45a.vercel.app/' target='_blank' rel="noreferrer">โปรเจค Space Time</a>
                        </li>
                        <li>
                            <p>ในตัวโปรเจคนี้จะเป็นการดึงข้อมูลจาก NASA API ใน ส่วนของดาวอังคาร และ Astronomy Picture of Date
                            </p>
                        </li>
                        <li>
                            <p>เครื่องมือที่ใช้มี Django, NASA API, tailwindcss และ Deploy บน Vercel
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Firebase Authentication</h5>
                    <img src={firebaseAuthProject} alt="Project"/>
                    <ul>
                        <li>
                            <a href='https://github.com/nuttamong/firebaseAuth' target='_blank' rel="noreferrer">โปรเจค Firebase Authentication</a>
                        </li>
                        <li>
                            <p>ในตัวโปรเจคนี้จะเป็นการเข้าสู่ระบบโดยใช้ Firebase Authentication และมีการยืนยันตัวตนในอีเมลที่ใช้สมัคร
                            </p>
                        </li>
                        <li>
                            <p>เครื่องมือที่ใช้มี Django, Firebase และ Deploy บน Vercel
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>To Do List Back-End</h5>
                    <ReactPlayer 
                        url='https://youtu.be/Vc170TTuMV8' 
                        width="80vh"/>
                    <ul>
                        <li>
                            <a href='https://github.com/nuttamong/toDoListNestJS' target='_blank' rel="noreferrer">โปรเจค To Do List ในส่วนของ Back-End</a>
                        </li>
                        <li>
                            <p>ในตัวโปรเจคนี้จะมีเรื่องของการ Authentication เข้ามาเกี่ยวข้องด้วย ถ้าผู้ใช้ไม่ทำกับเข้าสู่ระบบ 
                                ก็จะไม่สามารถจัดการกับ To Do List ของตัวเองได้
                            </p>
                        </li>
                        <li>
                            <p>เครื่องมือที่ใช้มี NestJS, MognoDB, Docker(ใช้รัน MognoDB), passportjs, jwt
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Project()