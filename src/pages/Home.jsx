import Carousel from '../components/Carousel';
import PetPixel from '../components/PetPixel';
import ProductCarousel from '../components/ProductCarousel';
import { FaPaw, FaRegStar, FaHeadset, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Showcase from '../components/Showcase';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <Carousel />
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Bienvenido a Patitas Felices 🐾</h1>
        <p>Todo lo que tu mascota necesita, en un solo lugar.</p>
      </section>

      <section style={{ padding: '40px 0', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
          
          <div style={{ flex: 1, padding: '20px' }}>
            <FaPaw style={{ fontSize: '40px', color: '#FF6F61' }} />
            <h2>Somos Especialistas</h2>
            <p>
              Con más de 10 años de experiencia en el cuidado de mascotas, nos dedicamos a proporcionar productos de alta calidad que satisfacen todas las necesidades de tu compañero de vida. Nuestro equipo de expertos está siempre disponible para ofrecerte asesoramiento personalizado y ayudar a mejorar la calidad de vida de tu mascota.
            </p>
            <hr />
          </div>

          <div style={{ flex: 1, padding: '20px' }}>
            <FaRegStar style={{ fontSize: '40px', color: '#FFD700' }} />
            <h2>Marcas Reconocidas</h2>
            <p>
              Trabajamos únicamente con las marcas más prestigiosas del mercado, garantizando productos confiables y efectivos para el bienestar de tu mascota. Cada artículo que ofrecemos pasa rigurosos controles de calidad, para que puedas confiar en que estás eligiendo lo mejor para tu amigo peludo.
            </p>
            <hr />
          </div>

          <div style={{ flex: 1, padding: '20px' }}>
            <FaHeadset style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h2>Atención y Calidad</h2>
            <p>
              Nos enorgullece brindar un servicio al cliente excepcional. Nuestro equipo de atención está siempre dispuesto a ayudarte a elegir los productos más adecuados para tu mascota, respondiendo rápidamente a todas tus dudas y asegurando que tu experiencia de compra sea placentera y satisfactoria.
            </p>
            <hr />
          </div>

        </div>
      </section>

      <PetPixel />
      <ProductCarousel />
      <Showcase />

      <section className="location-section">
        <h2>¿Dónde estamos?</h2>
        <p className="intro-text">
          Ven a conocer todo lo que Patitas Felices tiene para ti y tu mejor amigo peludo.
          Te esperamos con atención personalizada y mucho amor.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Datos de contacto</h3>
            <p><strong>Dirección:</strong> Av. Arequipa 1234, Lima, Perú</p>
            <p><strong>Teléfonos:</strong> (01) 234-5678 / +51 999 999 999</p>
            <p><strong>Email:</strong> info@patitasfelices.com</p>
            <p><strong>Horario de atención:</strong></p>
            <ul>
              <li>Lunes a Viernes: 9:00 AM - 7:00 PM</li>
              <li>Sábados: 9:00 AM - 5:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>

            <div className="social-media">
              <h3>¡Síguenos!</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook style={{ fontSize: '24px', color: '#2e7d32' }} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram style={{ fontSize: '24px', color: '#2e7d32' }} />
                </a>
                <a href="https://x.com/">
                  <FaTwitter style={{ fontSize: '24px', color: '#2e7d32' }} />
                </a>
              </div>
            </div>

          </div>
          <div className="map-container">
            <iframe
              title="Ubicación Patitas Felices"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.123456789!2d-77.04279368469278!3d-12.046374979824846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c123456789%3A0xabcdef1234567890!2sAv.+Arequipa+1234%2C+Lima%2C+Perú!5e0!3m2!1ses-419!2spe!4v1234567890123"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
