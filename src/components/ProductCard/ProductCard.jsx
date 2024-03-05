import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

import { getProducts } from '../../constants';
import { useEffect } from 'react';
import { useState } from 'react';

import './ProductCard.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products.products);
    };
    fetchData();
  }, []);

  const renderProducts = () => {
    return (
      <div className="grid-container">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle>{product.description}</Card.Subtitle>
              <Card.Text>{product.price} $</Card.Text>
              <Card.Img src={product.images} alt="" />
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };
  return (
    <div>
      <div>{renderProducts()}</div>
    </div>
  );
};

export default ProductCard;
