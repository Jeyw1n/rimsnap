import React, { useState } from "react";
import "./filter.css"

const FilterComponent = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const categories = ["Category 1", "Category 2", "Category 3"]; // Пример категорий

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({
      searchTerm,
      selectedCategories,
      sortOrder,
      priceRange,
    });
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <div>
        <label>
          Поиск:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div>
        <h4>Категории:</h4>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div>
        <h4>Сортировка по цене:</h4>
        <label>
          <input
            type="radio"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
          По возрастанию
        </label>
        <label>
          <input
            type="radio"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          По убыванию
        </label>
      </div>

      <div>
        <h4>Диапазон цены:</h4>
        <label>
          От:
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceRangeChange}
          />
        </label>
        <label>
          До:
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
          />
        </label>
      </div>

      <button type="submit">Применить фильтры</button>
    </form>
  );
};

export default FilterComponent;
