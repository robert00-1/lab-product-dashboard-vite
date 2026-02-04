import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

// Sample products for reference
const sampleProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
]

test('renders product dashboard title', () => {
  render(<App />)
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
  render(<App />)

  sampleProducts.forEach((product) => {
    // Check that each product is rendered
    expect(screen.getByText(product.name)).toBeInTheDocument()
  })
})

test('applies conditional styling for out-of-stock products', () => {
  render(<App />)

  // Get the "Phone" product element by text
  const phoneElement = screen.getByText('Phone')

  // Get the closest div that wraps the product card
  const container = phoneElement.closest('div')

  // Ensure the container exists and has the correct class
  expect(container).toBeInTheDocument()
  expect(container).toHaveClass('outOfStockClass')
})

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />)

  // Get all remove buttons
  const removeButtons = screen.getAllByText(/Remove/i)
  expect(removeButtons.length).toBeGreaterThan(0)

  // Click the first remove button
  fireEvent.click(removeButtons[0])

  // Check that the corresponding product is removed from the DOM
  const removedProductName = sampleProducts[0].name
  expect(screen.queryByText(removedProductName)).not.toBeInTheDocument()
})
