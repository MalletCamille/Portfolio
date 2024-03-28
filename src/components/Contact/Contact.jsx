import { Fragment } from 'react';
import './Contact.css';

function Contact() {
    return (
        <Fragment>
            <h2 id='contact'>Me Contacter</h2>
            <section className='section informations_contact' id="contact_section">
                <h3>Contactez-moi</h3>
                <div className='content_informations'>
                    <i className="icon fa-solid fa-at"></i>
                    <div className='container_span'>
                        <span className='title_informations'>Envoyer un e-mail</span>
                        <span className='informations'>mallet.camille11@gmail.com</span>
                    </div>
                </div>
                <div className='content_informations'>
                    <i className="icon fa-solid fa-phone"></i>
                    <div className='container_span'> 
                        <span className='title_informations'>Numéro de téléphone</span>
                        <span className='informations'>06 67 24 40 31</span>
                    </div>
                </div>
                <div className='content_informations'>
                    <i className="icon fa-solid fa-location-dot"></i>
                    <div className='container_span'> 
                        <span className='title_informations'>Localisation</span>
                        <span className='informations'>Carcassonne, Occitanie</span>
                        <span className='informations_special'>Ou disponible à distance</span>
                    </div>
                </div>                
            </section>
        </Fragment>
    );
}

export default Contact;
