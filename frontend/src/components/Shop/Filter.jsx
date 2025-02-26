import React, { useState } from "react";
import "./filter.css"


const FilterComponent = ({ onFilterChange }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({
      searchTerm,
      sortOrder,
      priceRange,
    });
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSortOrder("asc");
    setPriceRange({ min: "", max: "" });
    onFilterChange({
      searchTerm: "",
      selectedCategories: [],
      sortOrder: "asc",
      priceRange: { min: "", max: "" },
    });
  };

  return (
    <form onSubmit={handleFilterSubmit} className="filter-form">
      <div className="filter-row">
        <label>
          Поиск:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="filter-row">
        {/* <h4>Сортировка:</h4> */}
        <label>
          <input
            type="radio"
            value="asc"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
          Сначала дешевые
        </label>
        <label>
          <input
            type="radio"
            value="desc"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          Сначала дорогие
        </label>
      </div>

      <div className="filter-row">
        <h4>Цена:</h4>
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

      <div>
        <button type="submit" className="filter-button">Применить</button>
        <button type="button" className="filter-button" onClick={handleResetFilters}>Сбросить</button>
      </div>

    </form>
  );
};

export default FilterComponent;
