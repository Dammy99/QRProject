import React, { useState } from "react";
import styles from "./StorageItem.module.css";
import Button from "../Buttons/ProjButton/ProjButton";
import Counter from "../Counter/Counter";
import {addAndUpdateLocalStorage} from "../../functions/localStorage";
import { deleteItem } from "../../apis/apis";
export interface ItemDto {
  Id: string;
  OrgId: string;
  Quantity: number;
  Name: string;
  Details: string;
  PricePerOne: number;
  Image?: string;
  Code: string;
  Category: string;
}

export interface ItemProps {
  id: string;
  quantity: number;
  name: string;
  details: string;
  pricePerOne: number;
  image?: string;
  code: string;
  category: string;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
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
  setIsDeleted
}) => {

  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  const handleCountChange = (id: string, count: number) => {
    setCounts(prevCounts => ({ ...prevCounts, [id]: count }));
  };

  const handleDeleteItem = (id: string) => async () => {
    await deleteItem(id);
    setIsDeleted(true);
  };

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
        <div className={styles.selector}>
          <Button
            backgroundColor="royalblue"
            size="small"
            hoverColor="white"
            text="Добавити/Оновити"
            onClick={() => addAndUpdateLocalStorage(code, details, pricePerOne, category, name, counts[code] || 0, image || "")}
          />
          <div className={styles.counter}>
            <Counter
            initialValue={counts[code] || 0}
            onCountChange={(count) => handleCountChange(code, count)}
            maxValue={quantity}
            />
          </div>
        </div>
        {/* <Button
          backgroundColor="deepskyblue"
          size="small"
          hoverColor="white"
          text="Звіт"
        /> */}
        <Button
          onClick={handleDeleteItem(id)}
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
