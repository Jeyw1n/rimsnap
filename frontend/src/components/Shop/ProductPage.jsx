import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // Для получения ID товара из URL
import axios from "axios";
import Slider from "react-slick"; // Для слайдера изображений
import "slick-carousel/slick/slick.css";  // стили слайдера
import "slick-carousel/slick/slick-theme.css"; // стили слайдера
import "./product-page.css"; // Стили для страницы товара

const ProductPage = () => {
  const { id } = useParams(); // Получаем ID товара из URL
  const [product, setProduct] = useState(null); // Состояние для данных о товаре
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [error, setError] = useState(""); // Состояние для ошибок
  const [quantity, setQuantity] = useState(1); // Количество товара для добавления в корзину

  // Загрузка данных о товаре
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Ошибка при загрузке данных о товаре");
        console.error("Ошибка:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Добавление товара в корзину
  // const handleAddToCart = async () => {
  //   const token = localStorage.getItem("access_token");
  //   if (!token) {
  //     alert("Для добавления товара в корзину необходимо авторизоваться!");
  //     return;
  //   }

  //   try {
  //     await axios.post(
  //       "http://localhost:8000/api/cart/",
  //       { product_id: id, quantity },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     alert("Товар успешно добавлен в корзину!");
  //   } catch (err) {
  //     console.error("Ошибка при добавлении товара в корзину:", err);
  //     alert("Не удалось добавить товар в корзину.");
  //   }
  // };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Товар не найден.</div>;
  }

  // Настройки слайдера
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  };

  return (
    <div className="product-page mid-block">
      {/* Слайдер с изображениями товара */}
      <div className="product-images">
        <Slider {...sliderSettings}>
          {product.images.map((imageObj, index) => (
            <div key={index}>
              <img src={imageObj.image} alt={`Изображение товара ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Информация о товаре */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p><strong>Цена:</strong> {product.price} руб.</p>

        {/* Выбор количества и кнопка "Добавить в корзину" */}
        <div className="add-to-cart">
          <label>
            Количество:
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </label>
          {/* <button onClick={handleAddToCart}>Добавить в корзину</button> */}
          <button>Добавить в корзину</button>
        </div>
      </div>

      {/* Раздел отзывов */}
      <div className="reviews-section">
        <h2>Отзывы</h2>
        {product.reviews > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className="review">
              <p><strong>{review.user}</strong></p>
              <p>{review.text}</p>
              <p><em>{review.date}</em></p>
            </div>
          ))
        ) : (
          <p>Пока нет отзывов. Будьте первым!</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;