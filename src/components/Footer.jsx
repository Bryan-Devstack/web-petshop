import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      alert(`¡Gracias! Te has registrado con éxito para recibir consejos útiles sobre el cuidado de tus mascotas.`);
      setEmail(''); 
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        
        <div className="footer-brand">
          <h2>Patitas Felices 🐾</h2>
          <p>Amor, calidad y dedicación para los consentidos de la casa.</p>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <h4>Patitas Felices</h4>
            <ul>
              <li><a href="/nosotros">Quiénes Somos</a></li>
              <li><a href="/mision-vision">Misión y Visión</a></li>
              <li><a href="/responsabilidad">Responsabilidad Social</a></li>
              <li><a href="/trabaja-con-nosotros">Únete al Equipo</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h4>Compra Online</h4>
            <ul>
              <li><a href="/tienda">Tienda Virtual</a></li>
              <li><a href="/ofertas">Ofertas Especiales</a></li>
              <li><a href="/nuevos">Nuevos Productos</a></li>
              <li><a href="/servicios">Servicios Veterinarios</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h4>Soporte</h4>
            <ul>
              <li><a href="/faq">Preguntas Frecuentes</a></li>
              <li><a href="/envios">Información de Envíos</a></li>
              <li><a href="/devoluciones">Devoluciones y Cambios</a></li>
              <li><a href="/garantias">Garantía de Productos</a></li>
            </ul>
          </div>

          <div className="link-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/politicas">Política de Privacidad</a></li>
              <li><a href="/terminos">Términos y Condiciones</a></li>
              <li><a href="/cookies">Política de Cookies</a></li>
              <li><a href="/proteccion-datos">Protección de Datos</a></li>
            </ul>
          </div>
        </div>

        <div className="newsletter">
          <h4>Recibe Consejos para tu Mascota</h4>
          <p>Suscríbete y recibe en tu correo consejos útiles, novedades, y tips para mejorar el día a día junto a tu mascota.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">Suscribirme</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Patitas Felices. Todos los derechos reservados. Hecho con amor en Lima, Perú 🇵🇪</p>
      </div>
    </footer>
  );
}

export default Footer;
