import React from 'react';
import styles from './ProductPage.module.css';

const ProductPage = ({ product }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <div className={styles.details}>
        <p>Quantity: {product.quantity}</p>
        <p>Price per one: {product.price}</p>
        <p>Company ordered in: {product.company}</p>
      </div>
      <div className={styles.description}>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;