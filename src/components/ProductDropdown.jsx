import React from 'react';
import { Link } from 'react-router-dom';

const ProductDropdown = () => {
  return (
    <ul className="product-dropdown">
      <li><Link to="/products/dog">Perros</Link></li>
      <li><Link to="/products/cat">Gatos</Link></li>
      <li><Link to="/products/toys">Juguetes</Link></li>
      <li><Link to="/products/clothes">Ropa para mascotas</Link></li>
    </ul>
  );
};

export default ProductDropdown;
