import React, { useState } from 'react';
import '../../styles/Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendar, faEye, faComment, faHeart, faTicket } from '@fortawesome/free-solid-svg-icons';

const Overview = ({ user }) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) {
      setCouponMessage('Por favor, ingresa un código de cupón válido.');
      return;
    }
    setCouponMessage('¡Cupón aplicado correctamente!');
    setCouponCode('');
  };

  return (
    <div className="overview">
      <h2 className="overview-title">Resumen del Perfil</h2>

      <section className="user-info">
        <h3 className="section-title">Datos del Usuario</h3>
        <div className="user-card">
          <div className="user-detail">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p><strong>Nombre:</strong> {user.fullName}</p>
          </div>
          <div className="user-detail">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div className="user-detail">
            <FontAwesomeIcon icon={faCalendar} className="icon" />
            <p><strong>Miembro desde:</strong> {user.memberSince || 'Desconocido'}</p>
          </div>
        </div>
      </section>

      <section className="profile-stats">
        <h3 className="section-title">Estadísticas Principales</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <FontAwesomeIcon icon={faEye} className="icon" />
            <p><strong>{user.views || 2380}</strong> Productos vistos</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faComment} className="icon" />
            <p><strong>{user.comments || 32}</strong> Comentarios</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <p><strong>{user.favorites || 127}</strong> Favoritos</p>
          </div>
        </div>
      </section>

      <section className="coupon-section">
        <h3 className="section-title">Canjear Cupón</h3>
        <form onSubmit={handleCouponSubmit} className="coupon-form">
          <input
            type="text"
            placeholder="Ingresa tu código de cupón"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="coupon-input"
          />
          <button type="submit" className="coupon-button">
            <FontAwesomeIcon icon={faTicket} className="icon" /> Canjear
          </button>
        </form>
        {couponMessage && <p className={`coupon-message ${couponMessage.includes('correctamente') ? 'success' : 'error'}`}>{couponMessage}</p>}
      </section>
    </div>
  );
};

export default Overview;