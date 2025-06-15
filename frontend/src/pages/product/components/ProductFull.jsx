import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/product-page.css";

const ProductPage = () => {
  const { id } = useParams(); // Получение параметра id из URL
  const [product, setProduct] = useState(null); // Состояние для продукта
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(""); // Состояние ошибки
  const [quantity, setQuantity] = useState(1); // Состояние количества
  const [reviews, setReviews] = useState([]); // Состояние отзывов
  const [newReview, setNewReview] = useState(""); // Состояние нового отзыва
  const reviewsSectionRef = useRef(null); // Реф для раздела отзывов

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/catalog"); // Переход на страницу каталога
  };

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        const productResponse = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(productResponse.data); // Установка данных продукта

        const reviewsResponse = await axios.get(`http://localhost:8000/api/products/${id}/reviews/`);
        setReviews(reviewsResponse.data); // Установка данных отзывов
      } catch (err) {
        setError("Ошибка при загрузке данных о товаре");
        console.error("Ошибка:", err);
      } finally {
        setLoading(false); // Завершение загрузки
      }
    };

    fetchProductAndReviews();
  }, [id]);

  const handleAddReview = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Для добавления отзыва необходимо авторизоваться!");
      return;
    }

    if (!newReview.trim()) {
      alert("Отзыв не может быть пустым!");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/api/products/${id}/add-review/`,
        { text: newReview },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReviews([response.data, ...reviews]); // Добавление нового отзыва в список
      setNewReview("");

      // Прокрутка до раздела отзывов после добавления нового отзыва
      if (reviewsSectionRef.current) {
        reviewsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error("Ошибка при добавлении отзыва:", err);
    }
  };

  if (loading) {
    return <div>Загрузка...</div>; // Показать индикатор загрузки
  }

  if (error) {
    return <div>{error}</div>; // Показать сообщение об ошибке
  }

  if (!product) {
    return <div>Товар не найден.</div>; // Показать сообщение, если товар не найден
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="product-page mid-block">
      <button onClick={handleGoBack} className="back-button">
        ×
      </button>

      <div className="product-images">
        <Slider {...sliderSettings}>
          {product.images.map((imageObj, index) => (
            <div key={index}>
              <img src={imageObj.image} alt={`Изображение товара ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="product-info">
        <div>
          <h1 style={{margin: 0}}>{product.name}</h1>
          <h3 style={{margin: 0, marginTop: "12px"}}>О товаре</h3>
          <p style={{margin: 0, marginTop: "8px", color: "lightgray"}}>{product.description}</p>
        </div>
      
        <div className="product-price-block">
          <p style={{fontSize: '24px', margin: 0}}><strong>Цена:</strong> {product.price} руб.</p>
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
            <button>Добавить в корзину</button>
          </div>

        </div>
      </div>

      {localStorage.getItem("access_token") && (
        <div className="add-review-section">
          <h3>Оставьте отзыв</h3>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Напишите ваш отзыв..."
            rows="4"
            className="review-textarea"
          />
          <button onClick={handleAddReview}>Добавить отзыв</button>
        </div>
      )}

      <div className="reviews-section" ref={reviewsSectionRef}>
        <h2>Отзывы</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "gray"
                }}
              >
                <p><strong>{review.user}</strong></p>
                <p><em>{new Date(review.date).toLocaleDateString()}</em></p>
              </div>
              <p>{review.text}</p>
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