import { Fragment } from 'react';
import './Skill.css'
import logoJS from '/assets/images/logos/javascript.png'
import logonodeJS from '/assets/images/logos/nodejs.png'
import logoreact from '/assets/images/logos/react.png'
import logosass from '/assets/images/logos/sass.png'
import logovscode from '/assets/images/logos/vscode.png'
import logoredux from '/assets/images/logos/redux.png'

function Skill() {
    return (
        <Fragment>
        <section className='skillSection section' id="skills_section">
            <h2 id="skill" className='skills_title'>Mes compétences</h2>
            <div className='content_skills_section'>
                <div className='content_logo'>
                    <img className='logoimg' src={logoJS}></img>
                    <img className='logonodejs' src={logonodeJS}></img>
                    <img className='logoimg' src={logoreact}></img>
                    <img className='logoimg' src={logosass}></img>
                    <img className='logoimg' src={logovscode}></img>
                    <img className='logoimg' src={logoredux}></img>
                </div>
                <div className='content_text'>
                    <p className='skills_text'>Ayant effectué ma formation sur OpenClassRooms, formation à distance, j'ai pu acquérir des compétences en matière d'autonomie et de rigueur</p>
                    <hr className="skills_separator"/>
                    <ul className='skills_ul'>
                        <li className='skills_li'>Accessibilité</li>
                        <li className='skills_li'>Gestion de projet en méthode agile</li>
                        <li className='skills_li'>Référencement SEO</li>
                    </ul>
                </div>
            </div>
        </section>
        </Fragment>
    )
  }
  
  export default Skill;