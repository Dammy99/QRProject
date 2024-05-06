import React from "react";
import styles from "./StorageItem.module.css";
import Button from "../Buttons/ProjButton/ProjButton";

export interface ItemProps {
  id: number;
  quantity: number;
  name: string;
  details: string;
  pricePerOne: number;
  image?: string;
  code: string;
  category: string;
}

const StorageItem: React.FC<ItemProps> = ({
  id,
  image,
  quantity,
  name,
  pricePerOne,
  details,
  code,
  category,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.firstBlock}>
        <img src={image} alt={name} className={styles.photo} />
        <div className={styles.description}>
          <p className={styles.name}>{name}</p>
          <p className={styles.details}>Details: {details}</p>
          <p>Code info: {code}</p>
          <p>Category: {category}</p>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <p>Idishka: {id}</p>
        <p className={styles.quantity}>Quantity: {quantity}</p>
        <p className={styles.price}>Price per one: ${pricePerOne}</p>
      </div>
      <div className={styles.thirdBlock}>
        <Button
          backgroundColor="royalblue"
          size="small"
          hoverColor="white"
          text="Добавити продаж"
        />
        <Button
          backgroundColor="deepskyblue"
          size="small"
          hoverColor="white"
          text="Інформація"
        />
        <Button
          backgroundColor="deepskyblue"
          size="small"
          hoverColor="white"
          text="Звіт"
        />
        <Button
          backgroundColor="red"
          size="small"
          hoverColor="white"
          text="Видалити"
        />
      </div>
    </div>
  );
};

export default StorageItem;
