import { Navigate, Route, Routes } from 'react-router-dom'
import SocialMedia from '../components/social-media/SocialMedia'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Portfolio'
import NavBar from '../ui/NavBar/NavBar'

const AppRouter = () => {

  return (
    <>
      {/* <SocialMedia /> */}
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='/' element={<Navigate to="home" />}/>
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
      <NavBar />
    </>
  )
}

export default AppRouter