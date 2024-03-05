import styles from "./Organization.module.css";

interface SubscriptionsProps {
  name: string;
  priceToBuy: number;
  minQuantity: number;
  owner: string;
}

interface OwnProductsProps {
  name: string;
  price: number;
}

// create a list of subscriptions
const subscriptions: SubscriptionsProps[] = [
  { name: "Subscription 1", priceToBuy: 100, minQuantity: 10, owner: "Owner 1" },
  { name: "Subscription 2", priceToBuy: 150, minQuantity: 15, owner: "Owner 1" },
  { name: "Subscription 3", priceToBuy: 200, minQuantity: 20, owner: "Owner 1" },
];

// create a list of own products
const ownProducts: OwnProductsProps[] = [
  { name: "Own product 1", price: 100 },
  { name: "Own product 2", price: 150 },
  { name: "Own product 3", price: 200 },
];

const Organization = () => {
  return (
    <section className={styles.container}>
      <h2>Organization settings</h2>
      <div className={styles.subscriptions}>
        <p>Subs</p>
        <ul>
          {subscriptions.map((subscription, index) => (
            <li className={styles.item} key={index}>
              <p>{subscription.name}</p>
              <p>Price to buy: {subscription.priceToBuy}</p>
              <p>Min quantity: {subscription.minQuantity}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Own products</p>
        <ul>
          {ownProducts.map((product, index) => (
            <li className={styles.item} key={index}>
              <p>{product.name}</p>
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
        <button>Add new product</button>
      </div>
    </section>
  );
};

export default Organization;
