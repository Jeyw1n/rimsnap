import React from "react";
import { useNavigate } from 'react-router';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`); // Переход на страницу продукта
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={product.image} alt={product.name} /> {/* Изображение продукта */}
      <h2 className="product-title">{product.name}</h2> {/* Название продукта */}
      <p>{product.description}</p> {/* Описание продукта */}
      <h3 className="product-price">{product.price}₽</h3> {/* Цена продукта */}
      <p className="product-tags">{product.tags}</p> {/* Теги продукта */}
    </div>
  );
}

export default ProductCard;
