import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <Carousel>
                {products.map(product => (
                    <Carousel.Item key={product.id}>
                        <div className="product-item">
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductList;