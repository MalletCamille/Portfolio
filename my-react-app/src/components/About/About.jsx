import '../About/About.css'
import imgProfile from '../../assets/images/profile.jpg'

function About() {
    return (
        <section className="about__section">
            <img className='imgProfile' src={imgProfile}></img>
            <p className='pProfile'>
                Passionnée par le développement front-end et la création d'interfaces utilisateurs intuitives,<br/>
                <br/>
                J'ai débuté mon parcours dans le monde du web.<br/> 
                Grâce à une formation intensive de 9 mois chez OpenClassrooms,<br/> 
                j'ai acquis une solide expertise en technologies telles que React, Sass, Node.js et Redux,<br/> 
                me permettant ainsi de concevoir des applications web performantes.<br/> 
                <br/>
                Toujours avide d'apprendre et de collaborer sur de nouveaux projets,<br/> 
                je suis constamment à la recherche de défis stimulants et de collaborations enrichissantes.<br/>
                <br/>
                N'hésitez pas à explorer mon portfolio pour découvrir mon travail et à me contacter si vous souhaitez<br/> 
                discuter de projets ou simplement échanger.<br/>
                
            </p>
        </section>
    );
  }
  
  export default About;