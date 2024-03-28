import './Button.css';

function Button() {
    function gohome() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }

    return (
        <button className='button' onClick={gohome}>
            <i className="button_icon fa-solid fa-chevron-up"></i>
        </button>
    );
}

export default Button;
