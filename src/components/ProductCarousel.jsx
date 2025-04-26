import React from 'react';
import Slider from 'react-slick';
import '../styles/ProductCarousel.css';

import Cama from '../assets/images/Cama.jpg';
import Collar from '../assets/images/Collar.jpg';
import Juguete from '../assets/images/Juguete.jpg';
import Comida from '../assets/images/Comida.jpg';
import Champu from '../assets/images/Champu.jpg';
import Rascador from '../assets/images/Rascador.jpg';


const ProductCarousel = () => {
  const products = [
    { id: 1, imgSrc: Collar, title: 'Collar Premium', price: 'S/.15.99' },
    { id: 2, imgSrc: Juguete, title: 'Juguete Interactivo', price: 'S/.10.99' },
    { id: 3, imgSrc: Cama, title: 'Camita Deluxe', price: 'S/.29.99' },
    { id: 4, imgSrc: Comida, title: 'Comida Premium', price: 'S/.20.50' },
    { id: 5, imgSrc: Champu, title: 'Champú para Mascotas', price: 'S/.8.99' },
    { id: 6, imgSrc: Rascador, title: 'Rascador de Gato', price: 'S/.24.99' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel">
      <h2>Productos Destacados</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imgSrc} alt={product.title} className="product-img" />
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
            <button className="btn-view-details">Ver más detalles</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
