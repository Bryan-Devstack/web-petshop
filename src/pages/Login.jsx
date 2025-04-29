import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      navigate('/profile'); 
    }
  }, [navigate]);

  const getUsersFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = formData;
    const users = getUsersFromLocalStorage();

    const existingUser = users.find((user) => user.email === email);

    if (!existingUser) {
      setError('Correo electrónico no registrado');
    } else if (existingUser.password.trim() !== password.trim()) {
      setError('Contraseña incorrecta');
    } else {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(existingUser)); 
      alert('Inicio de sesión exitoso');
      setError('');
      navigate('/profile');
    }
  };

  const handleRegister = () => {
    const { username, password, email, fullName, phone, address } = formData;

    if (
      username.trim() &&
      password.trim() &&
      email.trim() &&
      fullName.trim() &&
      phone.trim() &&
      address.trim()
    ) {
      const newUser = { username, password, email, fullName, phone, address };
      const users = getUsersFromLocalStorage();
      const updatedUsers = [...users, newUser];

      localStorage.setItem('users', JSON.stringify(updatedUsers));

      alert('Registro exitoso');
      setError('');
      setIsLogin(true); 
    } else {
      setError('Por favor, complete todos los campos correctamente');
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      password: '',
      email: '',
      fullName: '',
      phone: '',
      address: '',
    });
    setError('');
  };

  return (
    <div className="auth-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="content">
        <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
        {error && <p className="error-message">{error}</p>}

        {!isLogin && (
          <>
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Nombre Completo"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                placeholder="Número de Teléfono"
                value={formData.phone}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="address"
                placeholder="Dirección"
                value={formData.address}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Nombre de Usuario"
                value={formData.username}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </>
        )}

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <button
          onClick={isLogin ? handleLogin : handleRegister}
          className="auth-button"
        >
          {isLogin ? 'Iniciar sesión' : 'Registrarse'}
        </button>

        <p className="switch-auth">
          {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
          <span onClick={switchMode} className="switch-link">
            {isLogin ? 'Registrarse' : 'Iniciar sesión'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;