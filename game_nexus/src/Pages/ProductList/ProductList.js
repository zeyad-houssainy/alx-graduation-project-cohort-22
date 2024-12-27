import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductCard from '../../components/Common/ProductCard/ProductCard'; // Import ProductCard

import BasicPagination from '../../components/Common/BasicPagination/BasicPagination';



const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // const url = "https://simpleapistore.vercel.app/api/products/1"
    const url = "https://fakestoreapi.com/products"
    fetch(url)
              .then(res=>res.json())
              .then(json=> {
                setProducts(json)
                console.log(json)
              })
                
              .catch(err => console.error(`Error fetching products ${products}`))   
  }, [])

  return (
    <>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <BasicPagination pageCount={5} />
    </>
  );
};

export default ProductList;