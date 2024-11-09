import React from 'react'
import '../css/AboutMe.css'

function AboutMe() {
    return (
        <div className='container'>
            <div className='about_me'>
                <h4><span>About</span> Me</h4>
                <p>สวัสดีครับ ผม นายณัฐกฤตา มงคลศริ ชื่อเล่น โดนัท อายุ 26ปี
                ฉันเคยศึกษาระดับปริญญาตรี คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
                มีความรับผิดชอบในงานที่ได้รับหมอบหมาย ขยัน และอดทน มีความสามารถ
                ในการสืบค้นข้อมูล และพร้อมที่จะเรียนรู้ในสิ่งใหม่ ๆ</p>
            </div>
            <div className='education'>
                <h4><span>E</span>ducation</h4>
                <ul>
                    <li>
                        <h6>2553 - 2559</h6>
                        <h5>โรงเรียนเบ็ญจะมะมหาราช</h5>
                        <h6>อุบลราชธานี</h6>
                        <p>จบการศึกษาระดับมัธยมศึกษาตอนต้น - ตอนปลาย</p>
                    </li>
                    <li>
                        <h6>2560 - 2563</h6>
                        <h5>มหาวิทยาลัยขอนแก่น</h5>
                        <h6>ขอนแก่น</h6>
                        <p>เรียนคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</p>
                    </li>
                </ul>
            </div>
            <div className='skill'>
                <h4><span>S</span>kills</h4>
                <h5>Programming Language:</h5>
                <ul>
                    <li>
                        <span>P</span>ython
                    </li>
                    <li>
                        <span>J</span>ava
                    </li>
                    <li>
                        <span>J</span>avaScript
                    </li>
                    <li>
                        <span>T</span>ypeScript
                    </li>
                    <li>
                        <span>S</span>QL
                    </li>
                    <li>
                        <span>H</span>TML
                    </li>
                    <li>
                        <span>C</span>SS
                    </li>
                </ul>
                <h5>Runtime & Framework:</h5>
                <ul>
                    <li>
                        <span>N</span>ode JS
                    </li>
                    <li>
                        <span>N</span>est JS
                    </li>
                    <li>
                        <span>R</span>eact JS
                    </li>
                </ul>
                <h5>Database:</h5>
                <ul>
                    <li>
                        <span>M</span>ongoDB
                    </li>
                    <li>
                        <span>M</span>ySQL
                    </li>
                </ul>
                <h5>Others:</h5>
                <ul>
                    <li>
                        <span>G</span>it
                    </li>
                    <li>
                        <span>D</span>ocker
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe()