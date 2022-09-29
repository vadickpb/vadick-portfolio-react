import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { optionsParticles } from "../../helpers/optionsParticles";
import Typewriter from 'typewriter-effect'

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <h1>
        <Typewriter
          options={{
            strings: [
              'Soy Ingeniero de Sistemas.',
              'Especializado en Desarrollo Web.'
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
            cursor: '<',
            delay: 100,
          }}
        />
        Hola, soy Vadick
      </h1>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles()}
      />
    </>
  )
}

export default Home