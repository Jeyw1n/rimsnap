import React from 'react';
import ProductCard from './ProductCard';
import '../styles/product-card.css';

export const LastProductsList = ({
  products,
  isLoading,
  error,
  title = "Самые популярные",
}) => {
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="lastProductsBlock">
      <h1>{title}</h1>
      <div className="productContainer">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};