import React from 'react';
import '../styles/cart-item.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  console.log(item.product)
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img 
          src={item.product.images[0]?.image}
          alt={item.product.name}
        />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.product.name}</h3>
        <p className="price">{item.product.price} ₽</p>
        
        <div className="quantity-controls">
          <button 
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      </div>
      
      <div className="cart-item-total">
        <p>{item.product.price * item.quantity} ₽</p>
        <button 
          onClick={() => onRemove(item.id)}
          className="remove-button"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartItem;