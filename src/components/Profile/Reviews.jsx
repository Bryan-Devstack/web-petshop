import React from 'react';
import '../../styles/History.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      product: 'Juguete interactivo para gatos',
      rating: 5,
      comment: '¡A mi gato le encantó! Muy buena calidad y llegó rápido.',
      date: '2025-04-20',
    },
    {
      id: 2,
      product: 'Collar con placa personalizada',
      rating: 4,
      comment: 'Bonito y resistente. Solo tardó un poco en llegar.',
      date: '2025-03-18',
    },
  ];

  return (
    <div className="reviews">
      <h2>Mis Revisiones</h2>
      {reviews.length === 0 ? (
        <p>No has dejado revisiones aún. Cuando compres algún producto o servicio, podrás compartir tu opinión aquí.</p>
      ) : (
        <ul className="review-list">
          {reviews.map((review) => (
            <li key={review.id} className="review-item">
              <h3>{review.product}</h3>
              <p><strong>Calificación:</strong> {review.rating} / 5</p>
              <p><strong>Comentario:</strong> {review.comment}</p>
              <p className="review-date"><em>Fecha: {review.date}</em></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
