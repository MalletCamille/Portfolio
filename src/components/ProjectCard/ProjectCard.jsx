import { Fragment } from 'react';
import '../ProjectCard/ProjectCard.css';

const projects = [
  {
    title: "Oh my Food",
    repo: "https://github.com/MalletCamille/ohmyfood",
    img: 'src/assets/images/Projects/ohmyfood.png',
    technos: ['src/assets/images/logos/sass.png']
    
  },
  {
    title: "Kasa",
    repo: "https://github.com/MalletCamille/Kasa",
    img: 'src/assets/images/Projects/kasa.png',
    technos: ['src/assets/images/logos/react.png','src/assets/images/logos/sass.png']
  },
  {
    title: "ArgentBank",
    repo: "https://github.com/MalletCamille/ArgentBank-website",
    img: 'src/assets/images/Projects/argentbank.png',
    technos:['src/assets/images/logos/react.png','src/assets/images/logos/redux.png']
  }
];

function ProjectCard() {
  return (
    <Fragment>
        <h2>Mes Projets</h2>
        <section className="projects_container" id="projects_section">
        {projects.map((project, index) => (
            <div className='project_card' key={index}>  
              <h3>{project.title}</h3>
              <img className='project_img' src={project.img}></img>
              <div className='techno_container'>
                {project.technos.map((techno, index) => (
                  <img className='techno_img' src={techno} key={index}></img> 
                ))}
              </div>
              <p className='repository'><a href={project.repo} target="_blank">Lien vers le repository github</a></p>
            </div>
        ))}
        </section>
    </Fragment>
  );
}

export default ProjectCard;
