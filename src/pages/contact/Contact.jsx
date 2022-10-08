import useForm from "../../hooks/useForm"

import './Contact.css'

const Contact = () => {

  const { name, email, subject, message, onInputChange } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log({name, email, subject, message});
  }


  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>


      <form onSubmit={onFormSubmit}>
        <div className="form-container">

          <div className="form-group-info">
            <input
              type="text"
              name="name"
              onChange={onInputChange}
              className="form-input"
              placeholder="Nombre"
            />
            <input
              type="text"
              name="email"
              onChange={onInputChange}
              className="form-input"
              placeholder="Correo Electrónico"
            />
            <input
              type="text"
              name="subject"
              onChange={onInputChange}
              className="form-input"
              placeholder="Tema"
            />
          </div>

          <div className="form-group-message">
            <textarea
              type="box"
              rows="5"
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