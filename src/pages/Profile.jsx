import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css'; // Asegúrate de tener un archivo CSS para estilos

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login'); // Redirigir al login si no está autenticado
    } else {
      // Cargar datos del usuario actual
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        setUser(currentUser);
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpiar el estado de autenticación y redirigir al login
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="profile-container">
      {/* Encabezado */}
      <header className="profile-header">
        <h1>Bienvenido, {user.fullName}!</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </header>

      {/* Información del perfil */}
      <section className="profile-section">
        <h2>Mi Perfil</h2>
        <div className="profile-info">
          <div className="info-item">
            <strong>Nombre de usuario:</strong> {user.username}
          </div>
          <div className="info-item">
            <strong>Correo electrónico:</strong> {user.email}
          </div>
          <div className="info-item">
            <strong>Teléfono:</strong> {user.phone}
          </div>
          <div className="info-item">
            <strong>Dirección:</strong> {user.address}
          </div>
        </div>
      </section>

      {/* Secciones adicionales */}
      <section className="profile-section">
        <h2>Herramientas</h2>
        <div className="profile-tools">
          <button className="tool-button">Historial de Compras</button>
          <button className="tool-button">Mis Favoritos</button>
          <button className="tool-button">Configuración de Cuenta</button>
          <button className="tool-button">Notificaciones</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;