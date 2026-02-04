import React, { useState } from 'react'
import ProductList from './components/ProductList'

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
    { id: 4, name: 'Headphones', price: '$199', inStock: true },
  ])

  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter(p => p.id !== id))
  }

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} removeProduct={removeProduct} />
    </div>
  )
}
