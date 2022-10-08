import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav-container">
      <NavLink 
      // className='link'
        className={({ isActive }) => `link ${isActive ? 'active' : ''}`} 
        to='home' 
      >
        <i
          className="fa-solid fa-house">
        </i>
      </NavLink>
      <NavLink 
        className={({ isActive }) => `link ${isActive ? 'active' : ''}`}  
        to="about">
        <i className="fa-solid fa-user"></i>
      </NavLink>
      <NavLink   
        className={({ isActive }) => `link ${isActive ? 'active' : ''}`}   
        to="/portfolio">
        <i className="fa-solid fa-briefcase"></i>
      </NavLink>
      <NavLink  
        className={({ isActive }) => `link ${isActive ? 'active' : ''}`}  
        to="/contact">
        <i className="fa-solid fa-envelope"></i>
      </NavLink>
    </nav>
  )
}

export default NavBar