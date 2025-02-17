import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";

function ProductCard({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2 className="product-title">{product.name}</h2>
      <p>{product.description}</p>
      <h3 className="product-price">{product.price}₽</h3>
      <p className="product-tags">{product.tags}</p>
    </div>
  );
}

const Products = () => {
  const [productsData, setProductsData] = useState([]); // Состояние для хранения данных о товарах
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProductsData(response.data); // Установите данные о товарах в состояние
      } catch (error) {
        console.error("Ошибка при загрузке данных о товарах:", error);
      } finally {
        setLoading(false); // Установите состояние загрузки в false
      }
    };

    fetchProducts();
  }, []); // Пустой массив зависимостей, чтобы выполнить эффект только один раз при монтировании

  if (loading) {
    return <div>Загрузка...</div>; // Показать индикатор загрузки
  }

  return (
    <div className="product-container mid-block">
      <br />
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <br />
    </div>
  );
};

export default Products;
