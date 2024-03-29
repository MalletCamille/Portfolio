import './Banner.css'
import imgBanner from '/assets/images/banner.jpg'

function Banner() {
    return (
      <div className='content_banner'>
         <img className='img_banner' src={imgBanner} alt="Photo de bannière de Camille.M reniflant des fleurs"></img>
      </div>
    
    )
  }
  
  export default Banner;