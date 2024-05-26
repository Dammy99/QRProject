import { useEffect, useState } from "react";
import styles from "./Generation.module.css";
import { getLocalStorageItems } from "../../functions/localStorage";
import Button from "../../components/Buttons/ProjButton/ProjButton";
import { getQrCode } from "../../apis/apis";

interface GenerationProduct {
  code: string,
  details: string,
  pricePerOne: number, 
  category: string, 
  name: string, 
  count: number, 
  imageSrc: string
}

const Generation = () => {
  const [imageSrc, setImageSrc] = useState('');

  const [products, setProducts] = useState<GenerationProduct[]>([]);

  useEffect(() => {
    setProducts(getLocalStorageItems());
  }, []);

  const handeGenerateQrCode = async () => {
    const productsJson = getLocalStorageItems();
    const products = JSON.stringify(productsJson);
    const response = await getQrCode(products);
    const url = window.URL.createObjectURL(response);
    setImageSrc(url);
  }

  return (
    <section className={styles.generation}>
      <h1>Вибрано елементів для генерації QR коду: {products.length}</h1>

      <h2>Добавлені продукти</h2>
      <div className={styles.elements}>
        {products.map((product) => (
          <div className={styles.element} key={product.code}>
            <img className={styles.image} src={product.imageSrc} />
            <h2 className={styles.id}>{product.name}</h2>
            <h3 className={styles.quantity}>Кількість: {product.count}</h3>
          </div>
        ))}
      </div>

      <Button onClick={handeGenerateQrCode} text="Згенерувати QR код" hoverBackgroundColor="#23a923" backgroundColor="darkgray" size="medium" color="black" />
      {imageSrc && <img style={{maxWidth:"100%", maxHeight:"500px"}} src={imageSrc} alt="Downloaded" />}

    </section>
  );
};

export default Generation;
