import React from 'react';
import { ItemProps } from '../../components/Item/Item';
import styles from './Storage.module.css';
import Button from '../../components/Buttons/ProjButton/ProjButton';
import StorageItem from '../../components/StorageItem/StorageItem';
// import { useNavigate } from 'react-router-dom';
// import DetailItem from './../DetailItem/DetailItem';

// interface ItemData {
//     id: number;
//     name: string;
//     quantity: number;
//     details: string;
//     price: number;
// }

const Storage: React.FC = () => {
    // const history = useNavigate();

    // Sample list of items
    const items: ItemProps[] = [
        { id: 1, code: "1", image:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg', name: 'Item 1', quantity: 5, details: 'Details 1', pricePerOne: 10, category:"category 1" },
        { id: 2, code: "2", image:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg', name: 'Item 2', quantity: 3, details: 'Details 2', pricePerOne: 15, category:"category 2" },
        { id: 3, code: "3", image:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg", name: 'Item 3', quantity: 2, details: 'Details 3', pricePerOne: 20, category:"category 3" },
    ];

    // const handleItemClick = (item: ItemData) => {
    //     history(`/detail/${item.id}`, { state: { item } });
    // };

    return (
        <div className={styles.storage}>
            <h1 className={styles.header}>Склад</h1>
            <ul className={styles.list}>
                {items.map((item) => (
                    <StorageItem 
                        image={item.image}
                        key={item.id}  
                        id={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        details={item.details}
                        pricePerOne={item.pricePerOne}
                        code={item.code}
                        category={item.category}
                    />
                ))}
            </ul>
            <div>
                <Button margin='0 20px 20px 20px' size='medium' backgroundColor='deepskyblue' hoverZoom='1.1' text='Добавити продукт вручну'/>
            </div>
        </div>
    );
};

export default Storage;