import React from 'react'

// ProductList component receives 'products' array and 'removeProduct' function as props
export default function ProductList({ products, removeProduct }) {
  return (
    // Container div for the product grid
    <div className="product-grid">
      {/* Loop over the products array and render each product */}
      {products.map((product) => (
        <div
          key={product.id} // Unique key is required by React when rendering lists
          className={product.inStock ? 'inStockClass' : 'outOfStockClass'} // Conditional styling based on stock status
        >
          {/* Display product name */}
          <h6>{product.name}</h6>

          {/* Display product price */}
          <p>{product.price}</p>

          {/* Show stock status with emoji for clarity */}
          <p>{product.inStock ? 'In Stock ✅' : 'Out of Stock ❌'}</p>

          {/* Buy Now button: disabled if the product is out of stock */}
          <button disabled={!product.inStock}>Buy Now</button>

          {/* Remove button: calls removeProduct function with the product's id */}
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
