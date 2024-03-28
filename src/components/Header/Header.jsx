import { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
    const [activeSection, setActiveSection] = useState('');
    const nav = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop-nav.current.clientHeight; 
                const sectionHeight = section.clientHeight-nav.current.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }            
            });
            if (document.body.scrollHeight-150 <= (window.scrollY+window.innerHeight)) {
                setActiveSection('contact_section')
            }  
        };


        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <header className="header"> 
            <nav className='navigation' ref={nav}>
                <ul className='navigation__list'>
                    <li><a href='#about_section' className={activeSection === 'about_section' ? 'active' : ''}>À propos</a></li>
                    <li><a href='#skills_section' className={activeSection === 'skills_section' ? 'active' : ''}>Mes compétences</a></li>
                    <li><a href='#projects_section' className={activeSection === 'projects_section' ? 'active' : ''}>Mes projets</a></li>
                    <li><a href='#contact_section' className={activeSection === 'contact_section' ? 'active' : ''}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
