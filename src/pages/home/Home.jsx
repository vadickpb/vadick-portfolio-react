import { startTransition } from 'react'
import Typewriter from 'typewriter-effect'
import NavBar from '../../ui/NavBar/NavBar'
import Avatar from '../../assets/avatar-vadick.jpg'
import './Home.css'
import SocialMedia from '../../components/social-media/SocialMedia'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-image-container">
          <img className='home-image' src={Avatar} alt="" />
        </div>

        <h2 className="home-subtitle">software engineer</h2>
        <h1 className="home-title">
          <Typewriter
            options={{
              strings: [
                'Hola, soy Vadick',
                'Desarrollador Web',
                '< React.js />',
                '<?php ?>',
                '.SQL',
                'node.js'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              cursor: '|',
              delay: 90,
            }}
          />
        </h1>
        <SocialMedia />
      </div>
      <NavBar />

    </>
  )
}

export default Home