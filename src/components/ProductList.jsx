import React from 'react'

export default function ProductList({ products, removeProduct }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id} // unique key
          className={product.inStock ? 'inStockClass' : 'outOfStockClass'}
        >
          <h6>{product.name}</h6>
          <p>{product.price}</p>
          <p>{product.inStock ? 'In Stock ✅' : 'Out of Stock ❌'}</p>
          <button disabled={!product.inStock}>Buy Now</button>
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
