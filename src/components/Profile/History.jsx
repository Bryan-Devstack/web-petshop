import React from 'react';
import CatShow from '../../assets/images/Compra1.jpg';
import Toy from '../../assets/images/Compra2.jpg';
import CatArena from '../../assets/images/Compra3.jpg';
import '../../styles/History.css';

const products = [
  {
    name: 'Cat Show',
    image: CatShow,
  },
  {
    name: 'Rascador para gatos',
    image: Toy,
  },
  {
    name: 'Arena para gatos',
    image: CatArena,
  },
];

const History = () => {
  return (
    <div className="history-container">
      <h2>Historial de Productos Vistos</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
