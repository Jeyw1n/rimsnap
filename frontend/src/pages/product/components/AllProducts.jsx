import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterComponent from "./Filter"; // Импортируем компонент фильтров
import { GetAllProducts } from "../api/GetAllProducts"; // Импортируем хук
import "../styles/product-page.css";

const AllProducts = () => {
  const { products } = GetAllProducts(); // Получаем продукты из хука
  
  const [filters, setFilters] = useState({ // Состояние для фильтров
    searchTerm: "",
    sortOrder: "asc",
    priceRange: { min: "", max: "" },
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Обновляем состояние фильтров
  };

  // Фильтрация продуктов на основе фильтров
  const filteredProducts = products.filter((product) => { // Заменяем productsData на products
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