import React, { useEffect, useState } from "react";
import styles from "./Generation.module.css";
import { getLocalStorageItems } from "../../functions/localStorage";
import Button from "../../components/Buttons/ProjButton/ProjButton";

interface GenerationProduct {
  id: string;
  name: string;
  count: number;
  imageSrc: string;
}

const Generation = () => {
  // const [products, setProducts] = useState<Product[]>([
  //     { id: 1, name: 'Product 1', quantity: 10, photo: 'product1.jpg', serialNumber: 'SN001' },
  //     { id: 2, name: 'Product 2', quantity: 5, photo: 'product2.jpg', serialNumber: 'SN002' },
  //     { id: 3, name: 'Product 3', quantity: 8, photo: 'product3.jpg', serialNumber: 'SN003' },
  // ]);

  const [products, setProducts] = useState<GenerationProduct[]>([]);

  useEffect(() => {
    setProducts(getLocalStorageItems());
  }, []);

  return (
    <section className={styles.generation}>
      <h1>Вибрано елементів для генерації QR коду: {products.length}</h1>

      <h2>Добавлені продукти</h2>
      <div className={styles.elements}>
        {products.map((product) => (
          <div className={styles.element} key={product.id}>
            <img className={styles.image} src={product.imageSrc} />
            <h2 className={styles.id}>{product.name}</h2>
            <h3 className={styles.quantity}>Кількість: {product.count}</h3>
            {/* <p>Серійний номер: {product.serialNumber}</p> */}
            {/* <button onClick={() => handleProductSelect(product)}>Вибрати</button> */}
          </div>
        ))}
      </div>

      <Button text="Generate QR" hoverBackgroundColor="#23a923" backgroundColor="darkgray" size="medium" color="black" />
    </section>
  );
};

export default Generation;
