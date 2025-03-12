import React, { useState } from 'react';
import './Sidebar.css';
import icon from "../../assets/home-icon.png";


const Sidebar = () => {
  const [toggle,showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : " aside"}>
        <a href="#home" className="nav__logo">
          <img src={icon} alt="No img" />
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                <i class="fa-solid fa-house"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                <i class="fa-solid fa-user"></i>
                </a>
              </li>  
              <li className="nav__item">
                <a href="#services" className="nav__link">
                <i class="fa-solid fa-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                <i class="fa-solid fa-graduation-cap"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                <i class="fa-solid fa-layer-group"></i>
                </a>
              </li>
              {/* <li className="nav__item">
                <a href="#Pricing" className="nav__link">
                <i class="fa-solid fa-book"></i>               
                 </a>
              </li> */}
              {/* <li className="nav__item"> 
                <a href="#blog" className="nav__link">
                <i class="fa-regular fa-note-sticky"></i>
                                 </a>
              </li> */}
              <li className="nav__item">
                <a href="#Contact" className="nav__link">
                <i class="fa-solid fa-phone "></i>
                                 </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2024 - 2025. </span>   
        </div>x
      </aside>
      <div className={toggle ? "nav__toggle  nav__toggle-open" : "nav__toggle"} onClick={()=> showMenu(!toggle)}> 
      <i class="fa-solid fa-bars"></i>
      </div>  
    </>
  )
}
 
export default Sidebar
