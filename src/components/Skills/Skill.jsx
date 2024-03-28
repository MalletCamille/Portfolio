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
            <h2 id="skill">Mes compétences</h2>
        <section className='skillSection section' id="skills_section">
            <img className='logoimg' src={logoJS}></img>
            <img className='logonodejs' src={logonodeJS}></img>
            <img className='logoimg' src={logoreact}></img>
            <img className='logoimg' src={logosass}></img>
            <img className='logoimg' src={logovscode}></img>
            <img className='logoimg' src={logoredux}></img>
        </section>
        </Fragment>
    )
  }
  
  export default Skill;