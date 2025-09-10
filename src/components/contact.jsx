import './contact.css'

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <p className="contact-title">CONTACTO</p>
                <p className="contact-text">Si tienes alguna pregunta, deseas obtener más información sobre nuestros servicios o te gustaría discutir un proyecto, no dudes en ponerte en contacto con nosotros.</p>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <form action="mailto:jp@hormail.com" method="post" encType="text/plain" className='contact-form'>
                        <input className='contact-input' id="POST-name" type="text" name="Nombre" placeholder="Escribe tu nombre" required />
                        <input className='contact-input' id="POST-mail" type="email" name="Correo" placeholder="Escribe tu e-mail" required />
                        <input className='contact-input' id="POST-phone" pattern="[0-9]{10}" type="text" name="Telefono" placeholder="Escribe tu teléfono (opcional)" required />
                        <textarea className='contact-input' id="POST-message" type="textarea" name="Mensaje" placeholder="Escribe tu mensaje" required></textarea>
                        <input type="hidden" id="custId" name="mensaje" value="Buscando contacto con la empresa. Favor de comunicarse."></input>
                        <br />
                        <button className="contact-button" type="submit" value="Contactar">Cóntactar</button>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <div className="contact-card">
                        <p className="contact-cardText">Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
                        <p className="contact-cardAltText">Correo Electrónico</p>
                        <p className="contact-cardText">armatex@gmail.com</p>
                        <p className="contact-cardAltText">Redes Sociales</p>
                        <p className="contact-cardIcon"><i className="icons facebook fa-brands fa-facebook"></i> <i className="icons whatsapp fa-brands fa-whatsapp"></i> <i className="icons instagram fa-brands fa-instagram"></i></p>
                        <p className="contact-cardAltText">Teléfono</p>
                        <p className="contact-cardText">91-1234-567</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;