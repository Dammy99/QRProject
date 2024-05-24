import React, { useEffect, useState } from 'react';
import styles from './Storage.module.css';
import Button from '../../components/Buttons/ProjButton/ProjButton';
import StorageItem, { ItemProps } from '../../components/StorageItem/StorageItem';
import StorageItemForm from '../../components/Forms/CreateStorageItemForm/CreateStorageItemForm';
import { getItems } from '../../apis/apis';
import { getLocalStorageUser } from '../../functions/localStorage';


const Storage: React.FC = () => {
    const [isAddItemOpen, setIsAddItemOpen] = useState<boolean>(false);
    const [items, setItems] = useState<ItemProps[]>([]);
    const [isPosted, setIsPosted] = useState<boolean>(false);
    const [isHaveOrg, setIsHaveOrg] = useState<boolean>(false);

    useEffect(() => {
        const fetchItems = async () => {
            const orgId = getLocalStorageUser().orgId;
            const items = await getItems(orgId);
            setItems(items);
        };
        fetchItems();
        setIsPosted(false);
        if (getLocalStorageUser().orgId !== "00000000-0000-0000-0000-000000000000") {
            setIsHaveOrg(true);
          }
    }, [isPosted]);

    const handleOpenAddItem = async () => {
        setIsAddItemOpen(!isAddItemOpen);
      };

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
                {!isHaveOrg 
                ? <div>Створіть організацію перед використанням</div> 
                : <Button onClick={handleOpenAddItem} margin='0 20px 20px 20px' size='medium' backgroundColor='deepskyblue' hoverZoom='1.1' text='Добавити продукт вручну'/>}
            </div>
            {isAddItemOpen && <StorageItemForm setOpen={handleOpenAddItem} setIsPosted={setIsPosted}/>}
        </div>
    );
};

export default Storage;