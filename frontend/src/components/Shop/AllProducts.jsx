import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./Product";
import "./products.css";


const AllProducts = () => {
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
    <div className=" mid-block">
      <h1>Каталог</h1>
      <div className="product-container">
        
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
      <br />
    </div>
  );
};

export default AllProducts;
