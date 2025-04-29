import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaPaw, FaSearch } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><FaPaw /> Patitas Felices</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>

        <li className="dropdown">
          <span className="dropdown-trigger">Productos</span>
          <div className="dropdown-menu">
            <ul className="product-dropdown">
              <li><Link to="/products/cat">Gatos</Link></li>
              <li><Link to="/products/dog">Perros</Link></li>
              <li><Link to="/products/toys">Juguetes</Link></li>
              <li><Link to="/products/clothes">Ropa para Mascotas</Link></li>
            </ul>
          </div>
        </li>

        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>

      <div className="nav-actions">
        <form className="search-form">
          <input type="text" placeholder="Buscar productos..." />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>

        <Link to="/login" className="action-icon">
          <FaUser />
        </Link>

        <Link to="/cart" className="action-icon">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
