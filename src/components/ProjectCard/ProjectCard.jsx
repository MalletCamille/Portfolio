import { Fragment } from 'react';
import '../ProjectCard/ProjectCard.css';
import ohmyfood from '../../../public/assets/images/Projects/ohmyfood.png'
import kasa from '../../../public/assets/images/Projects/kasa.png'
import argentbank from '../../../public/assets/images/Projects/argentbank.png'
import sass from '../../../public/assets/images/logos/sass.png'
import react from '../../../public/assets/images/logos/react.png'
import redux from '../../../public/assets/images/logos/redux.png'

const projects = [
  {
    title: "Oh my Food",
    repo: "https://github.com/MalletCamille/ohmyfood",
    img: ohmyfood,
    technos: [sass],
    description: "Application en mobile first de réservation de plat en ligne"
    
  },
  {
    title: "Kasa",
    repo: "https://github.com/MalletCamille/Kasa",
    img: kasa,
    technos: [react, sass],
    description: "Application de réservation de logements en ligne"
  },
  {
    title: "ArgentBank",
    repo: "https://github.com/MalletCamille/ArgentBank-website",
    img: argentbank,
    technos:[react, redux],
    description: "Application bancaire sous React redux"
  }
];

function ProjectCard() {
  return (
    <Fragment>
        <section className="section projects_container" id="projects_section">
          <h2>Mes Projets</h2>
          <div className='content_projects_section'>
            {projects.map((project, index) => (
              <div className='project_card' key={index}>  
                <h3>{project.title}</h3>
                <img className='project_img' src={project.img} alt="image illustrant la page index du projet"></img>
                <div className='techno_container'>
                  {project.technos.map((techno, index) => (
                    <img className='techno_img' src={techno} key={index} alt="logo illustrant la technologie utilisée pour le projet"></img> 
                  ))}
                </div>
                <span className='techno_description'>{project.description}</span>
                <p className='repository'><a href={project.repo} target="_blank">Lien vers le repository github</a></p>
              </div>
            ))}
          </div>
        </section>
    </Fragment>
  );
}

export default ProjectCard;
