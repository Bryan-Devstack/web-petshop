import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Overview from '../components/Profile/Overview';
import History from '../components/Profile/History';
import Reviews from '../components/Profile/Reviews';
import Settings from '../components/Profile/Settings';
import ProfileImageUpload from '../components/Profile/ProfileImageUpload';

import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();

  const checkAuth = useCallback(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        setUser(currentUser);
      }
    }
  }, [navigate]); 

  useEffect(() => {
    checkAuth();
  }, [checkAuth]); 

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const getButtonClass = (section) => {
    return activeSection === section ? 'active' : '';
  };

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="profile-container">
      <aside className="profile-sidebar">
        <h2>Perfil</h2>
        <ul>
          <li>
            <button
              className={getButtonClass('overview')}
              onClick={() => setActiveSection('overview')}
            >
              📊 Resumen
            </button>
          </li>
          <li>
            <button
              className={getButtonClass('history')}
              onClick={() => setActiveSection('history')}
            >
              📜 Historial
            </button>
          </li>
          <li>
            <button
              className={getButtonClass('reviews')}
              onClick={() => setActiveSection('reviews')}
            >
              ⭐ Revisiones
            </button>
          </li>
          <li>
            <button
              className={getButtonClass('settings')}
              onClick={() => setActiveSection('settings')}
            >
              ⚙️ Configuración
            </button>
          </li>
        </ul>

        <button className="logout-button" onClick={handleLogout}>
          🔒 Cerrar Sesión
        </button>
      </aside>

      <main className="profile-content" aria-live="polite">
        <ProfileImageUpload user={user} setUser={setUser} />

        {activeSection === 'overview' && <Overview user={user} />}
        {activeSection === 'history' && <History />}
        {activeSection === 'reviews' && <Reviews />}
        {activeSection === 'settings' && <Settings user={user} setUser={setUser} />}
      </main>
    </div>
  );
};

export default Profile;