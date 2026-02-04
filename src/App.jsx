import React, { useState } from 'react' // Import React and the useState
import ProductList from './components/ProductList' // import the ProductList
// Main  App component
export default function App() {
  // useState hook to manage the list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
    { id: 4, name: 'Headphones', price: '$199', inStock: true },
  ])
 // Function to remove a product by its id
  const removeProduct = (id) => {
    // Update the products state, filtering out the product with given id
    setProducts((prevProducts) => prevProducts.filter(p => p.id !== id))
  }
  // JSX to render the app
  return (
    <div>
      <h1>Product Dashboard</h1> {/*Heading for the dashboard */}
      {/* Render ProductList component, passing products and removeProduct function as props */}
      <ProductList products={products} removeProduct={removeProduct} />
    </div>
  )
}
