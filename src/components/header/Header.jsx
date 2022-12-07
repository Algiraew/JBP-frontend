import React, { useState } from "react";
import styles from "./header.module.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";

export default function Header() {
  const [cart, setCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const handleCloseCart = () => {
    setCart(false);
  };

  const handleOpenCart = () => {
    setCart(true);
  };
  const getCountOfCartItems = () => {
    return cartItems.length;
  };

  return (
    <header className={styles.header}>
      <div>
        <h3>
          <a href="#" className={styles.logo}>
            z-Cataloge
          </a>
        </h3>
      </div>
      <div className={styles.nav}>
        <a href="#" className={styles.nav_link}>
          Все продукты
        </a>
        <a href="#" src="#" className={styles.nav_link}>
          Категории
        </a>
        <a href="#" src="#" className={styles.nav_link}>
          О нас
        </a>
        <a href="#" src="#" className={styles.nav_link}>
          Поддержка
        </a>
      </div>

      <div className={styles.header_end}>
        <input className={styles.search} type="text" placeholder="поиск" />
        <div className={styles.cart} onClick={handleOpenCart}>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
          </span>
        </div>
        <Cart isCartOpen={cart} handleCloseCart={handleCloseCart} />
      </div>
    </header>
  );
}
