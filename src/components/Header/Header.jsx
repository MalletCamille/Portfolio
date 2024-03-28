import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop; 
                const sectionHeight = section.clientHeight;
                console.log(section.id, window.scrollY, sectionTop, sectionHeight);
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
                
            });
        console.log(activeSection);
        };


        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header"> 
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li><a href='#'>Accueil</a></li>
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
