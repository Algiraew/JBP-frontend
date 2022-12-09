import React from 'react'
import img1 from './photo/group.png'
import img2 from './photo/basket.png'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cartState } from '../../features/cart.slice'
import Cart from '../Cart/Cart'

const Header = () => {
  const active = useSelector((state) => state.cart.active)
  const products = useSelector((state) => state.cart.productId)
  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(cartState(!active))
  }

  return (
    <header className={styles.header_start}>
      <h3 className={styles.logo}>GROZNY</h3>
      <ul className={styles.ul_div}>
        <NavLink to = "/products"  className={styles.main}>ALL PRODUCTS </NavLink>
        <NavLink to = "/noPage" className={styles.main}>SOLUTIONS </NavLink>
        <NavLink to = "/about" className={styles.main}>ABOUT </NavLink>
        <NavLink to = "/comparison" className={styles.main}>SUPPORT </NavLink>
      </ul>
        <input type="text" placeholder=' Search...' className={styles.search}/>
      <div className={styles.header_end}>
        <img className={styles.group} src={img1} alt="" />
        <img className={styles.basket} src={img2} alt="" onClick={handleCart} />
        {!active && products.length > 0 && <span className={styles.count}>{products.length}</span>}
      {active && <Cart/>}
      </div>
    </header>

  )
}

export default Header
