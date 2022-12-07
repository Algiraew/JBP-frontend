import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompare } from "../../../features/compare.slice";
import { addCartItem } from "../../../features/cart.slice";
import { getPhone } from "../../../features/phone.slice";
import styles from "../phoneCards/Card.module.scss";

function PhoneCard(item) {
  const phones = useSelector((state) => state.phones.phones);
  const dispatch = useDispatch();

  const handleCompare = (id) => {
    dispatch(addCompare(id));
  };

  const addToCart = (id) => {
    dispatch(addCartItem(id));
  };

  useEffect(() => {
    dispatch(getPhone());
  }, [dispatch]);

  console.log(item.item.image);

  return (
    <div className={styles.Card} key={item.item._id}>
      <div className={styles.image}>
        <img
          src={`http://localhost:4000/${item.item.image[0]}`}
          alt={item.item.image[0]}
        />
      </div>
      <div className={styles.phoneDescription}>
        <h3 className={styles.name}>{item.item.manufacturer}</h3>
        <span>{item.model}</span>
        <div className={styles.description}>
          {item.item.specification.memory.ram} <br />
          {item.item.specification.memory.rom} <br />
          {item.item.specification.battery}
        </div>
        <div className={styles.price}>{`${item.item.price} руб`}</div>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.buttonBasket}
          onClick={() => addToCart(item.item._id)}
        >
          {" "}
          Basket
        </button>
        <button
          className={styles.buttonCompare}
          onClick={() => handleCompare(item.item._id)}
        >
          Compare
        </button>
      </div>
    </div>
  );
}
export default PhoneCard;
