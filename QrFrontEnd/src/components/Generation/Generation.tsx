import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    quantity: number;
    photo: string;
    serialNumber: string;
}

const Generation: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Product 1', quantity: 10, photo: 'product1.jpg', serialNumber: 'SN001' },
        { id: 2, name: 'Product 2', quantity: 5, photo: 'product2.jpg', serialNumber: 'SN002' },
        { id: 3, name: 'Product 3', quantity: 8, photo: 'product3.jpg', serialNumber: 'SN003' },
    ]);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const handleProductSelect = (product: Product) => {
        setSelectedProducts((prevSelectedProducts) => {
            const productInList = selectedProducts.find((p) => p.id == product.id);
            if (productInList) {
                if (productInList.quantity !== product.quantity) {
                    productInList.quantity += 1;
                }
                return [...prevSelectedProducts];
            } else {
                const newProduct = { ...product, quantity: 1 };
                return [...prevSelectedProducts, newProduct];
            }
        })
    };

    return (
        <div>
            <h1>Available Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.photo} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Quantity: {product.quantity}</p>
                        <p>Serial Number: {product.serialNumber}</p>
                        <button onClick={() => handleProductSelect(product)}>Select</button>
                    </li>
                ))}
            </ul>

            <h1>Selected Products</h1>
            <ul>
                {selectedProducts.map((product, index) => (
                    <li key={index}>
                        <h3>{product.name}</h3>
                        <h3>{product.quantity}</h3>
                    </li>
                ))}
            </ul>

            <button>Generate QR</button>
        </div>
    );
};

export default Generation;