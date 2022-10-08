import CryptoApp from '../../assets/portfolio/Crypto-app.png'
import EcommerceBrand from '../../assets/portfolio/ecommerce-brand.png'
import PortfolioVadick from '../../assets/portfolio/project-portfolio.png'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <h1 className='portfolio-title'>Portfolio</h1>

      <div className="item-project-container">
        <div className="project-img">
          <img src={EcommerceBrand} alt="" />
        </div>
        <div className="project-info-container">
          <div className="project-info-text">
            <h3 className='project-title'>E-Commerce</h3>
            <p className='project-description'>El aplicativo web Ecommerce de tienda de ropa utilicé el framework de javascript Reactjs para la parte del Frontend y para la parte del Backend use firebase,
              En react esta desarrollado con funcional components y hooks, cuenta con una autenticación ingresando datos y autenticación con Google, consumiendo los servicios de firebase. Además de un carrito de compras realizado con useContext.</p>
          </div>
          <div className="project-info-buttons">
            <a href="" className="project-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className="project-link">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />


      <div className="item-project-container">
        <div className="project-img">
          <img src={CryptoApp} alt="" />
        </div>
        <div className="project-info-container">
          <div className="project-info-text">
            <h3 className='project-title'>Crypto App</h3>
            <p className='project-description'>El aplicativo web de información de cryptomonedas es un aplicativo web desarrollado con el framework React, consumiendo un API crypto y usando hooks</p>
          </div>
          <div className="project-info-buttons">
            <a href="" className="project-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className="project-link">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="item-project-container">
        <div className="project-img">
          <img src={PortfolioVadick} alt="" />
        </div>
        <div className="project-info-container">
          <div className="project-info-text">
            <h3 className='project-title'>Portafolio - Vadick</h3>
            <p className='project-description'>El aplicativo web de mi portafolio personal, usando el framework React con custom Hooks y algunos paquetes como Particlests y el servicio de Emailjs para la parte con contacto</p>
          </div>
          <div className="project-info-buttons">
            <a href="" className="project-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className="project-link">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default Portfolio