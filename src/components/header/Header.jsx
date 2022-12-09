import React from 'react'
import img1 from './photo/group.png'
import img2 from './photo/basket.png'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cartState } from '../../features/cart.slice'
import Logout from "../auth/Logout";
import Cart from '../Cart/Cart'
import { authState } from '../../features/auth.slice'
import AuthForm from '../auth/AuthForm'

const Header = () => {
  const active = useSelector((state) => state.cart.active)
  const products = useSelector((state) => state.cart.productId)
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth);
  const activeAuth = useSelector((state) => state.auth.active)

  const handleCart = () => {
    dispatch(cartState(!active))
  }

  const handleAuth = () => {
    dispatch(authState(!activeAuth))
    console.log(activeAuth);
  }

  return (
    <header className={styles.header_start}>
      <h3 className={styles.logo}>GROZNY</h3>
      <ul className={styles.ul_div}>
        <NavLink to="/products" className={styles.main}>ALL PRODUCTS </NavLink>
        <NavLink to="/news" className={styles.main}>NEWS</NavLink>
        <NavLink to="/phoneCards" className={styles.main}>COMPARISON </NavLink>
        <NavLink to="/about" className={styles.main}>ABOUT </NavLink>
      </ul>
      <input type="text" placeholder=' Search...' className={styles.search} />
      <div className={styles.header_end}>
        {!activeAuth && !token && <div className={styles.auth}><AuthForm/></div>}
        {token ? <Logout/> : <img className={styles.group} src={img1} alt="" onClick={handleAuth} />}
        {token && <img className={styles.basket} src={img2} alt="" onClick={handleCart} />}
        {!active && products.length > 0 && <span className={styles.count}>{products.length}</span>}
        {active && <Cart />}
      </div>
    </header>

  )
}

export default Header
