import { useState, Fragment } from 'react';
import './Form.css'

function Form() {
    const [formData, setFormData] = useState({
        nom: '',
        telephone: '',
        email: '',
        objet: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <h2 id='contact'>Me Contacter</h2>
            <section className='contact_section'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor="name" className='label' >Nom:</label>
                        <input id="name" className='input' type="text" name="nom" value={formData.nom} onChange={handleChange} />
                        <label className='label' htmlFor='telephone'>Téléphone:</label>                                            
                        <input id="telephone" className='input' type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email' className='label'>Email:</label>
                        <input id="email" className='input' type="email" name="email" value={formData.email} onChange={handleChange} />
                        <label className='label' htmlFor='objet'>Objet:</label>
                        <input className='input' id="objet" type="text" name="objet" value={formData.objet} onChange={handleChange} />
                    </div>
                    <label htmlFor='message' className='label'>Message:</label>
                    <textarea id="mesage" className='message input--full-width' name="message" value={formData.message} onChange={handleChange} />
                    <button className='button' type="submit">Envoyer</button>
                </form>
                <div className='informations_contact'>
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
                </div>
            </section>
        </Fragment>
    );
}

export default Form;
