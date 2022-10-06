import AvatarImage from '../../assets/avatar-vadick.jpg'
import { SkillBars } from 'react-skills'
import './About.css'

const About = () => {

  const skillsData = [
    {
      name: 'ReactJS',
      level: 100,
      color: '#458588',
    },
    {
      name: 'JavaScript',
      level: 85,
      color: '#fabd2f',
    },
    {
      name: 'html',
      level: 85,
      color: '#fe8019',
    },
    {
      name: 'Css',
      level: 85,
      color: '#83a598',
    },
  ]

  return (
    <div className="about-container">
      <div className="about-title">
        About <span>me</span> 
      </div>
      <div className="aboutme-container">
        <div className="about-info-container">
          <p className="text-about">
            Ingeniero de Sistemas y Cómputo, Especializado en el desarrollo de aplicaciones web y apasionado de la tecnología, Los lenguajes que uso de parte del Frontend son HTML, CSS, Javascript con los frameworks Jquery, Bootstrap, Vue y React.
            El lenguaje que utilizo de parte del backend es PHP con el framework Laravel. Además de generar API Rest.
          </p>
          {/* <a className="btn-primary" href='#skills'>
            Skills <i className='arrow fa-sharp fa-solid fa-arrow-down'></i>
          </a> */}
        </div>
        <div className="img-about">
          <img src={AvatarImage} alt="" />
        </div>
      </div>
      {/* <section className="skill-container" id='skills'>
        <h1 className="skill-title">
          Skills
        </h1>
        <SkillBars skills={skillsData} />
        

      </section> */}
    </div>
  )
}

export default About