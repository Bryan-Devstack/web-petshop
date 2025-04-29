import React from 'react';
import '../../styles/ProfileImageUpload.css';

const ProfileImageUpload = ({ user, setUser }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...user, profileImage: reader.result };
        setUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-image-upload">
      <h3>Actualizar Foto de Perfil</h3>
      <div className="image-preview">
        <img
          src={user.profileImage || 'https://via.placeholder.com/150'}
          alt="Foto de perfil"
          className="profile-image"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        id="upload-photo"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor="upload-photo" className="upload-button">
        Cambiar Imagen
      </label>
    </div>
  );
};

export default ProfileImageUpload;
