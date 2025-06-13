import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Запрашиваем с API товары
      const response = await axios.get(`http://localhost:8000/api/products`);
      // Записываем полученные данные
      setProducts(response.data);
    };

    fetchData();
  }, []);

  return { products };
};