import './About.css';
import imgProfile from '/assets/images/profile.jpg';
import { Fragment } from 'react';

function About() {
    return (
        <Fragment>
            <section className="section about__section" id="about_section">
            <h2 id="about">À propos</h2>
                <div className='content_about_section'>
                    <img className='imgProfile' src={imgProfile} alt="Photo de Profil de Camille.M"></img>
                    <p className='pProfile'>
                        Passionnée par le développement front-end et la création d'interfaces utilisateurs intuitives,<br/>
                        J'ai débuté mon parcours dans le monde du web.
                        Grâce à une formation intensive de 9 mois chez OpenClassrooms, 
                        j'ai acquis une solide expertise en technologies telles 
                        que <span className='spanProfile'>React</span>, <span className='spanProfile'>Sass</span>, 
                        <span className='spanProfile'> Node.js</span> et <span className='spanProfile'>Redux</span>, 
                        me permettant ainsi de concevoir des applications web performantes.<br/> 
                        <br/>
                        Toujours avide d'apprendre et de collaborer sur de nouveaux projets, 
                        je suis constamment à la recherche de défis stimulants et de collaborations enrichissantes.<br/>
                        <br/>
                        N'hésitez pas à explorer mon portfolio pour découvrir mon travail 
                        et à me contacter si vous souhaitez 
                        discuter de projets ou simplement échanger.<br/>
                    </p>
                </div>
            </section>
        </Fragment>
    );
}

export default About;
