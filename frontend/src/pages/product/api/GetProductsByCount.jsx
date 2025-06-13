import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetLastProducts = (count) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрашиваем с API "count" товаров
        const response = await axios.get(`http://localhost:8000/api/last-products?count=${count}`);
        // Записываем полученные данные
        setProducts(response.data);
      } catch (err) {
        setError('Не удалось загрузить товары');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [count]);

  return { products, isLoading, error };
};