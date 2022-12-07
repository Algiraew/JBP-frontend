import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, getCartItems } from "../../features/cart.slice";
import styles from "../header/Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const removeFromCart = (id) => {
    dispatch(deleteCartItem(id));
  };

  const handleIncreaseAmount = (itemId) => {
    // Проходимся по стейту
    const updatedState = cartItems.map((item) => {
      if (item.id === itemId) {
        // Если айди совпадают, вернуть новый объект, куда развёрнуты все ключи объекта
        // а к ключу amount прибавить 1
        return { ...item, amount: item.amount + 1 };
      }
      // Если айди не совпадают, вернуть изначальный стейт
      return item;
    });
    // Изменить состояние передав обновлённый массив
    cartItems(updatedState);
  };

  // Функция для уменьшения ключа amount из объекта
  const handleDecreaseAmount = (itemId) => {
    const getCartItem = cartItems.find((item) => item.id === itemId);

    // Условие для того чтобы пользователь не мог уменьшать ключ amount меньше 0
    if (getCartItem.amount < 1) {
      return;
    }

    // Если айди совпадают, вернуть новый объект, куда развёрнуты все ключи объекта
    // а к ключу amount прибавить 1
    const updatedState = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, amount: item.amount - 1 };
      }
      // Если айди не совпадают, вернуть изначальный стейт
      return item;
    });
  }

  return (
    props.isCartOpen && (
      <div className={styles.cart_open}>
        <span className={styles.cart_text}>Ваша Корзина</span>
        <button className={styles.cart_btn} onClick={props.handleCloseCart}>
          Закрыть
        </button>
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item._id} className={styles.cart_item}>
                <p>{item.name}</p>
                <img
                  className={styles.item_img}
                  src={`http://localhost:4000${item.image[0]}`}
                  alt=""
                />
                <button onClick={handleIncreaseAmount}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
</button>
<span>0</span>
<button onClick={handleDecreaseAmount}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
</button>
                <button
                  style={{ width: "20px", height: "20px" }}
                  onClick={() => removeFromCart(item._id)}
                ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
              </svg></button>
              </li>
            );
          })}
        </ul>
        <p className={styles.total_price}>{`Итого:`}{ totalPrice}</p>
      </div>
    )
  );
};

export default Cart;
