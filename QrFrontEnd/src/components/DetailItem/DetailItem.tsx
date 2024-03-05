import React from 'react';
import styles from './DetailItem.module.css';

interface DetailItemProps {
    photo: string;
    details: string;
    name: string;
    price: number;
}

const DetailItem: React.FC<DetailItemProps> = ({ photo, details, name, price }) => {
    return (
        <div className={styles.detailItem}>
            <img src={photo} alt={name} className={styles.photo} />
            <div className={styles.details}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.price}>Price per one: ${price}</p>
                <p className={styles.description}>{details}</p>
            </div>
        </div>
    );
};

export default DetailItem;