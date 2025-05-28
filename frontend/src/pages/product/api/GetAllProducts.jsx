import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрашиваем с API "count" товаров
        const response = await axios.get(`api/products`);
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