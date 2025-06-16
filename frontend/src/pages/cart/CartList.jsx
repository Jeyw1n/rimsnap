import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CartItem from './components/CartItem';
import './styles/cart-list.css';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_URL = 'http://127.0.0.1:8000/api'; // Адрес апи

  // Получаем токен из localStorage
  const accessToken = localStorage.getItem('access_token');

  // Загружаем товары в корзине
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/cart/`, {
          headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        
        // Получаем полные данные для каждого товара
        const itemsWithFullProducts = await Promise.all(
          response.data.map(async item => {
            const productResponse = await axios.get(
              `${API_URL}/products/${item.product.id}/`,
              { headers: { 'Authorization': `Bearer ${accessToken}` } }
            );
            return {
              ...item,
              product: productResponse.data
            };
          })
        );
        
        setCartItems(itemsWithFullProducts);
      } catch (err) {
        setError('Не удалось загрузить корзину');
        console.error('Ошибка:', err);
      } finally {
       setLoading(false);
      }
    };

    fetchCartItems();
  }, [accessToken, navigate]);

  // Удаление товара
  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`${API_URL}/cart/${itemId}/`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (err) {
      setError('Ошибка при удалении товара');
      console.error('Ошибка:', err);
    }
  };

  // Изменение количества
  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axios.patch(
        `${API_URL}/cart/${itemId}/`,
        { quantity: newQuantity },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
      
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    } catch (err) {
      setError('Ошибка при обновлении количества');
      console.error('Ошибка:', err);
    }
  };

  // Подсчёт общей суммы
  const totalSum = cartItems.reduce(
    (sum, item) => sum + (item.product.price * item.quantity), 
    0
  );

  if (loading) return <div className="loading">Загрузка корзины...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="cart-list mid-block">
      <h1>Ваша корзина</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Ваша корзина пуста</p>
          <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total-sum">
              <span>Итого:</span>
              <span>{totalSum} ₽</span>
            </div>
            <button 
              className="checkout-button"
              onClick={() => navigate('/checkout')}
            >
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;