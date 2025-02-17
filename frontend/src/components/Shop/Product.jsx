import React from "react";

function ProductCard({ product }) {
  const handleClick = () => {
    alert(`ID: ${product.id}, Name: ${product.name}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={product.image} alt={product.name} />
      <h2 className="product-title">{product.name}</h2>
      <p>{product.description}</p>
      <h3 className="product-price">{product.price}₽</h3>
      <p className="product-tags">{product.tags}</p>
    </div>
  );
}

export default ProductCard;
