import profile from './img/profile.jpg';
import './App.css';
import AboutMe from './component/AboutMe';
import Contact from './component/Contact';
import Project from './component/Project';
import { IoIosPerson } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaAt } from "react-icons/fa";
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import resume from './pdf/resume.pdf'

function App() {
  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <body className="app-container">
          <div className='menu'>
            <ul>
              <li><NavLink to='/'><IoIosPerson size={25}/>About</NavLink></li>
              <li><NavLink to='/project'><AiOutlineFundProjectionScreen size={25}/>Project</NavLink></li>
              <li><NavLink to='/contact'><FaAt size={25}/>Contact</NavLink></li>
            </ul>
          </div>
          <div className='card-profile'>
            <div className='img-profile'>
              <img src={profile} alt="Profile"/>
            </div>
            <h2 className='profile-name'>Nuttakitta Mongkhonsari</h2>
            <h2 className='profile-job'>Back-end Developer</h2>
            <div className='card-bottom'>
              <NavLink onClick={onButtonClick}>Download Resume</NavLink>
            </div>
          </div>
          <div className='card-info'>
            <Routes>
              <Route path='/' element={AboutMe}/>
              <Route path='/project' element={Project} />
              <Route path='/contact' element={Contact} />
            </Routes>
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
