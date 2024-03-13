import '../Header/Header.css'

function Header() {
    return (
        <header className="header"> 
            <nav className='navigation'>
                <ul className='navigation__list'>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>À propos</a></li>
                    <li><a href='#'>Mes compétences</a></li>
                    <li><a href='#'>Mes projets</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;
