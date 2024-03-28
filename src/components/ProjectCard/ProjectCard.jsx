import { Fragment } from 'react';
import '../ProjectCard/ProjectCard.css';

const projects = [
  {
    title: "Oh my Food",
    repo: "https://github.com/MalletCamille/ohmyfood",
    img: 'public/assets/images/Projects/ohmyfood.png',
    technos: ['public/assets/images/logos/sass.png'],
    description: "Application en mobile first de réservation de plat en ligne"
    
  },
  {
    title: "Kasa",
    repo: "https://github.com/MalletCamille/Kasa",
    img: 'public/assets/images/Projects/kasa.png',
    technos: ['public/assets/images/logos/react.png','public/assets/images/logos/sass.png'],
    description: "Application de réservation de logements en ligne"
  },
  {
    title: "ArgentBank",
    repo: "https://github.com/MalletCamille/ArgentBank-website",
    img: 'public/assets/images/Projects/argentbank.png',
    technos:['public/assets/images/logos/react.png','public/assets/images/logos/redux.png'],
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
                <img className='project_img' src={project.img}></img>
                <div className='techno_container'>
                  {project.technos.map((techno, index) => (
                    <img className='techno_img' src={techno} key={index}></img> 
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
