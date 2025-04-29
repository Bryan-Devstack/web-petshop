import React, { useState } from 'react';
import '../../styles/Settings.css';

const Settings = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    fullName: user.fullName || '',
    email: user.email || '',
    phone: user.phone || '',
    address: user.address || '',
    birthDate: user.birthDate || '',
    location: user.location || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveChanges = () => {
    const updatedUser = { ...user, ...formData };
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    alert('Datos actualizados');
  };

  return (
    <div className="settings">
      <h2>Configuración de Perfil</h2>
      <form>
        <label>Nombre completo:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        </label>
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>Teléfono:
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </label>
        <label>Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </label>
        <label>Fecha de nacimiento:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
        </label>
        <label>Ubicación:
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={saveChanges}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default Settings;
