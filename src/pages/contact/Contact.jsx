import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import useForm from "../../hooks/useForm"

import './Contact.css'

const Contact = () => {

  const form = useRef()

  const { onResetForm, onInputChange } = useForm({
    from_name: '',
    email: '',
    phone: '',
    message: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_tlckhjl", "template_o8ng1n7", form.current, '31KDDnhpapxji_Waz')
      .then((result) => {
        Swal.fire('Mensaje enviado', 'Se envió su mensaje correctamente a Vadick', 'success')
        console.log(result.text);
        document.getElementById("myForm").reset()
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>


      <form ref={form} onSubmit={onFormSubmit} id="myForm">
        <div className="form-container">

          <div className="form-group-info">
            <input
              type="text"
              name="from_name"
              onChange={onInputChange}
              className="form-input"
              placeholder="Nombre"
            />
            <input
              type="email"
              name="email"
              onChange={onInputChange}
              className="form-input"
              placeholder="Correo Electrónico"
            />
            <input
              type="text"
              name="phone"
              onChange={onInputChange}
              className="form-input"
              placeholder="Teléfono"
            />
          </div>

          <div className="form-group-message">
            <textarea
              type="box"
              rows="5"
              cols="30"
              name="message"
              onChange={onInputChange}
              className="form-input form-textarea"
              placeholder="Mensaje"
            ></textarea>
          </div>
        </div>

        <button className="btn-primary" type="submit">Enviar</button>

      </form>




    </div>
  )
}

export default Contact