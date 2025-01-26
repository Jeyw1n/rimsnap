import React from "react";
import "./products.css"

function ProductCard({ product }) {
  return(
    <div className="product">
      <img
        src={product.image}
        alt={product.name}
      />
      <h2 className="product-title">{product.name}</h2>
      <p>{product.description}</p>
      <h3 className="product-price">{product.price}</h3>
      <p className="product-tags">{product.tags}</p>
    </div>
  )
}

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: "Товар 1",
      description: "Описание товара 1",
      price: "1000₽",
      image: "https://placehold.co/256",
      tags: "#red #chrome"
    },
    {
      id: 2,
      name: "Товар 2",
      description: "Описание товара 2",
      price: "2000₽",
      image: "https://placehold.co/256",
      tags: "#chrome"
    },
    {
      id: 3,
      name: "Товар 3",
      description: "Описание товара 3",
      price: "3000₽",
      image: "https://placehold.co/256",
      tags: "#pearl #white"
    }
  ];

  const productCards = [];
  for (let i = 0; i < productsData.length; i++) {
    const product = productsData[i];
    productCards.push(
      <ProductCard key={product.id} product={product} />
    );
  }

  return (
      <div className="product-container mid-block">
        {productCards}
        {productCards}
      </div>
  );
};

export default Products;