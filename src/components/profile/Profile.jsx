import React from 'react'
import './profile.css'

function Profile() {
  return (
    <div className='profile'>
      <div className='about_me'>
          <h4><span>P</span>rofile</h4>
          <p>สวัสดีครับ ผม นายณัฐกฤตา มงคลศริ ชื่อเล่น โดนัท อายุ 26ปี
          ฉันเคยศึกษาระดับปริญญาตรี คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
          มีความรับผิดชอบในงานที่ได้รับหมอบหมาย ขยัน และอดทน มีความสามารถ
          ในการสืบค้นข้อมูล และพร้อมที่จะเรียนรู้ในสิ่งใหม่ ๆ</p>
          <p>
            Hello, my name is Mr. Nuttakitta Mongkhonsari, nickname Donut, 26 years old.
            I hold a Bachelor’s degree in Engineering, majoring in Computer Engineering (Incomplete). 
            I am a responsible, diligent, and patient individual. I have strong research skills and a willingness to learn new things.
          </p>
      </div>
      <div className='education'>
          <h4><span>E</span>ducation</h4>
          <ul>
              <li>
                  <h6>2553 - 2559</h6>
                  <h5>โรงเรียนเบ็ญจะมะมหาราช (Benchama Maharat School)</h5>
                  <h6>อุบลราชธานี (Ubon Ratchathani)</h6>
                  <p>จบการศึกษาระดับมัธยมศึกษาตอนต้น - ตอนปลาย</p>
                  <p>(Completed lower secondary education - upper secondary education)</p>
              </li>
              <li>
                  <h6>2560 - 2563</h6>
                  <h5>มหาวิทยาลัยขอนแก่น (Khon Kean Univercity)</h5>
                  <h6>ขอนแก่น (Khon Kean)</h6>
                  <p>เรียนคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</p>
                  <p>(Studied in the Faculty of Engineering, majoring in Computer Engineering)</p>
              </li>
          </ul>
      </div>
      <div className='certificate'>
          <h4><span>C</span>ertificate</h4>
          <ul>
              <li>
                  <img src="img/certificate.png" alt="Certificate"/>
                  <h5>Meta Font-End Developer</h5>
                  <a href='pdf/Certificate.pdf' target='_blank' rel="noreferrer">รายละเอียด</a>
              </li>
          </ul>
      </div>
      <div className='skill'>
          <h4><span>S</span>kills</h4>
          <div className="list-skill">
            <div className="first">
              <h5>Programming Language:</h5>
              <ul>
                  <li>
                      <span>H</span>TML
                  </li>
                  <li>
                      <span>C</span>SS
                  </li>
                  <li>
                      <span>J</span>avaScript
                  </li>
                  <li>
                      <span>P</span>ython
                  </li>
                  <li>
                      <span>J</span>ava
                  </li>
                  <li>
                      <span>T</span>ypeScript
                  </li>
                  <li>
                      <span>S</span>QL
                  </li>
              </ul>
            </div>
            <div className="second">
              <h5>Runtime & Framework:</h5>
              <ul>
                  <li>
                      <span>N</span>odeJS
                  </li>
                  <li>
                      <span>R</span>eactJS
                  </li>
              </ul>
            </div>
            <div className="third">
              <h5>Database:</h5>
              <ul>
                  <li>
                      <span>M</span>ongoDB
                  </li>
                  <li>
                      <span>M</span>ySQL
                  </li>
              </ul>
            </div>
            <div className="forth">
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
      </div>
    </div>
  )
}

export default Profile