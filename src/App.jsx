import { useCallback } from 'react'
import 'animate.css';
import AppRouter from './routes/AppRouter'
import { loadFull } from 'tsparticles'
import { optionsParticles } from './helpers/optionsParticles'
import Particles from 'react-tsparticles'

import './App.css'

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <AppRouter />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles()}
      />
    </>
  )
}

export default App
