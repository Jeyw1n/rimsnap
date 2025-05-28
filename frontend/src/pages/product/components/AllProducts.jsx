import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import FilterComponent from "./Filter"; // Импортируем компонент фильтров
import "../styles/product-page.css";

const AllProducts = () => {
  const [productsData, setProductsData] = useState([]); // Состояние для хранения данных о товарах
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки
  const [filters, setFilters] = useState({ // Состояние для фильтров
    searchTerm: "",
    sortOrder: "asc",
    priceRange: { min: "", max: "" },
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Обновляем состояние фильтров
  };

  // Фильтрация продуктов на основе фильтров
  const filteredProducts = productsData.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesPriceRange = 
      (filters.priceRange.min === "" || product.price >= filters.priceRange.min) &&
      (filters.priceRange.max === "" || product.price <= filters.priceRange.max);

    return matchesSearchTerm && matchesPriceRange;
  });

  // Сортировка продуктов
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  if (loading) {
    return <div>Загрузка...</div>; // Показать индикатор загрузки
  }

  return (
    <div className="mid-block">
      <h1>Каталог</h1>
      <FilterComponent onFilterChange={handleFilterChange} /> {/* Добавляем компонент фильтров */}
      <div className="product-container">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default AllProducts;
