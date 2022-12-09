import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, patchCart } from '../../features/cart.slice';
import styles from './Cart.module.scss'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.productId)
    const quantity = products.filter((element) => element.productId === item._id)

    const handleMinus = (id, type, count) => {
        if (count >= 1) {
            dispatch(patchCart({id, type, count}))
        }
    }

    const handlePlus = (id, type, count) => {
        if (count <= item.specification.amount) {
            dispatch(patchCart({id, type, count}))
        }
    }

    const handleDel = (id) => {
        dispatch(deleteFromCart(id))
    }

    return (
        <div className={styles.cart_item}>
            <div>
                <img className={styles.image} src={`http://localhost:4000${item.image[0]}`} alt={item.name} />
            </div>
            <div className="discription">
                <div className="product">
                    <div className="company">{item.manufacturer}</div>
                    <div className="model">{item.model}</div>
                </div>
                <div className="memory">
                    <div className="rom">Память: {item.specification.memory.rom}</div>
                    <div className="ram">ОЗУ: {item.specification.memory.ram}</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div>
                    <button className={styles.delete} onClick={() => handleDel(item._id)}>✕</button>
                </div>
                <div className={styles.quantity}>
                    <button className={styles.button_count} onClick={() => handleMinus(quantity[0]._id, 'minus', quantity[0].count - 1)}>-</button>
                    <div className={styles.counter}>{quantity[0].count}</div>
                    <button className={styles.button_count} onClick={() => handlePlus(quantity[0]._id, 'plus', quantity[0].count + 1)}>+</button>
                </div>
                <div className="amount">Остаток на складе: {item.specification.amount}</div>
            </div>
        </div>
    );
};

export default CartItem;