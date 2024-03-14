import '../Header/Header.css'

function Header() {
    return (
        <header className="header"> 
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#about'>À propos</a></li>
                    <li><a href='#skill'>Mes compétences</a></li>
                    <li><a href='#'>Mes projets</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
