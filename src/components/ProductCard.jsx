// src/components/ProductCard.jsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ProductCard({ product, onRemove }) {
  // Conditional class for out-of-stock products
  const cardClass = product.inStock ? "inStockClass" : "outOfStockClass";

  return (
    <Card className={cardClass} sx={{ margin: 1 }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">KES {product.price}</Typography>
        <Typography variant="body2" gutterBottom>
          {product.inStock ? "In Stock ✅" : "Out of Stock ❌"}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={!product.inStock}
        >
          Buy Now
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => onRemove(product.id)}
          sx={{ marginLeft: 1 }}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}
