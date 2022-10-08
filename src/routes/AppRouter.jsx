import { Navigate, Route, Routes } from 'react-router-dom'
import SocialMedia from '../components/social-media/SocialMedia'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Portfolio'
import NavBar from '../ui/NavBar/NavBar'

const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Navigate to="home" />}/>
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <NavBar />
    </>
  )
}

export default AppRouter