import React, { useState, useEffect } from 'react';
import './Button.css';

function Button() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsVisible(scrollTop > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function goHome() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }

    return (
        <button className='button' onClick={goHome} style={{ display: isVisible ? 'block' : 'none' }}>
            <i className="button_icon fa-solid fa-chevron-up"></i>
        </button>
    );
}

export default Button;
