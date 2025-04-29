import '../styles/Showcase.css';
import { useState } from 'react';
import Promocional1 from '../assets/video/Promocional1.mp4';
import Promocional2 from '../assets/video/Promocional2.mp4';
import Purina from '../assets/images/Purina-Logo.png';
import RoyalCanin from '../assets/images/Royal-Logo.png'
import Pedigree from '../assets/images/Pedigree-Logo.png'
import Hills from '../assets/images/Hills-Logo.png'
import Servicio1 from '../assets/images/Servicio1.png'
import Servicio2 from '../assets/images/Servicio2.png'
import Servicio3 from '../assets/images/Servicio3.png'
import Servicio4 from '../assets/images/Servicio4.png'


function Showcase() {
  const [currentVideo, setCurrentVideo] = useState(Promocional1);
  const [key, setKey] = useState(0); 

  const handleVideoEnd = () => {
    setCurrentVideo(currentVideo === Promocional1 ? Promocional2 : Promocional1);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="showcase-container">
      
      <div className="brand-bar">
        <img src={Pedigree} alt="Pedigree" />
        <img src={RoyalCanin} alt="Royal Canin" />
        <img src={Purina} alt="Purina" />
        <img src={Hills} alt="Hill's" />
      </div>

      <div className="media-section">
        
        <div className="gallery">
          <img src={Servicio1} alt="Servicio1" />
          <img src={Servicio2} alt="Servicio2" />
          <img src={Servicio3} alt="Servicio3" />
          <img src={Servicio4} alt="Servicio4" />
        </div>

        <div className="video-container">
          <video 
            key={key} 
            autoPlay 
            muted 
            onEnded={handleVideoEnd} 
          >
            <source src={currentVideo} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>

      </div>
    </div>
  );
}

export default Showcase;