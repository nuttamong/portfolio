import React from 'react'
import './projects.css'
import ReactPlayer from 'react-player'
import aemi from '../../assets/aemi.png'
import movie from '../../assets/movie-app.png'

function Projects() {
  return (
    <div className='project'>
        <h4><span>P</span>roject</h4>
        <ul>
            <li>
                <h5>ระบบเช่าหอพัก</h5>
                <div className="video">
                    <ReactPlayer 
                        url='https://youtu.be/4k50fkNPSZw' 
                        width="45vw"
                        controls={true}/>
                </div>
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
                <div className="video">
                    <ReactPlayer 
                        url='https://youtu.be/7RejodGp9v4' 
                        width="45vw"
                        controls={true}/>
                </div>
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
                <h5>Movie Wep App</h5>
                <img src={movie} alt="movie"/>
                <ul>
                    <li>
                        <a href='https://moviesapp-a7023.web.app/' target='_blank' rel="noreferrer">Movie Wep App</a>
                    </li>
                    <li>
                        <a href='https://github.com/nuttamong/MovieWepApp' target='_blank' rel="noreferrer">Github: https://github.com/nuttamong/MovieWepApp</a>
                    </li>
                    <li>
                        <p>เครื่องมือที่ใช้มี ReactJS, Redux และ Deploy บน firebase Hosting</p>
                    </li>
                </ul>
            </li>
            <li>
                <h5>Website recommending tourist attractions in Buriram</h5>
                <div className="video">
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=X61hjMAvGqw' 
                        width="45vw"
                        controls={true}/>
                </div>
                <ul>
                    <li>
                        <p>Website recommending tourist attractions in Buriram</p>
                    </li>
                    <li>
                        <a href='https://github.com/nuttamong/Tour' target='_blank' rel="noreferrer">Github: https://github.com/nuttamong/Tour</a>
                    </li>
                    <li>
                        <p>เครื่องมือที่ใช้มี HTML, CSS, Javascript</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Projects