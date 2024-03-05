import React from "react";
import styles from "./Item.module.css";

export interface ItemProps {
  id: number;
  quantity: number;
  name: string;
  details: string;
  pricePerOne: number;
  image?: string;
}

const Item: React.FC<ItemProps> = ({
  image,
  quantity,
  name,
  pricePerOne,
  details,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.leftSide}>
        <img src={image} alt={name} className={styles.photo} />
        <div className={styles.description}>
          <p className={styles.name}>{name}</p>
          <p className={styles.details}>Details: {details}</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.quantity}>Quantity: {quantity}</p>
        <p className={styles.price}>Price per one: ${pricePerOne}</p>
      </div>
    </div>
  );
};

export default Item;
