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
        <i class="fa-solid fa-user"></i>
      </NavLink>
      <Link className='link' to="/portfolio">
        <i class="fa-solid fa-briefcase"></i>
      </Link>
      <Link className='link' to="/contact">
        <i class="fa-solid fa-envelope"></i>
      </Link>
    </nav>
  )
}

export default NavBar