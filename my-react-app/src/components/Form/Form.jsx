import { useState, Fragment } from 'react';
import '../Form/Form.css'

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
            <form className='form' onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label className='label'>
                        Nom:
                        <input className='input' type="text" name="nom" value={formData.nom} onChange={handleChange} />
                    </label>
                    <label className='label'>
                        Téléphone:
                        <input className='input' type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
                    </label>
                </div>
                <div className='input-group'>
                    <label className='label'>
                        Email:
                        <input className='input' type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label className='label'>
                        Objet:
                        <input className='input' type="text" name="objet" value={formData.objet} onChange={handleChange} />
                    </label>
                </div>
                <label className='label' style={{ fontFamily: 'poppins', fontSize: '18px', fontWeight: '200' }}>
                    Message:
                    <textarea className='input input--full-width' name="message" value={formData.message} onChange={handleChange} />
                </label>

                <button className='button' type="submit">Envoyer</button>
            </form>
        </Fragment>
    );
}

export default Form;
