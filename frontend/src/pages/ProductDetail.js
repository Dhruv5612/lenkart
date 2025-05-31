import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Rating,
  Tabs,
  Tab,
  Paper,
  TextField,
  Divider
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: 'Classic Aviator',
    price: 1999,
    description: 'A timeless aviator design that never goes out of style.',
    images: [
      '/images/aviator1.jpg',
      '/images/aviator2.jpg',
      '/images/aviator3.jpg'
    ],
    features: [
      'UV Protection',
      'Polarized Lenses',
      'Metal Frame',
      'Adjustable Nose Pads'
    ],
    rating: 4.5,
    reviews: [
      {
        user: 'John Doe',
        rating: 5,
        comment: 'Great quality and perfect fit!'
      }
    ]
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0}>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #1976d2' : 'none'
                  }}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({product.reviews.length} reviews)
            </Typography>
          </Box>

          <Typography variant="h5" color="primary" gutterBottom>
            ₹{product.price}
          </Typography>

          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Features:
            </Typography>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCart />}
              size="large"
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Favorite />}
              size="large"
            >
              Add to Wishlist
            </Button>
          </Box>
        </Grid>

        {/* Product Details Tabs */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Description" />
              <Tab label="Reviews" />
            </Tabs>

            <Box sx={{ mt: 3 }}>
              {tabValue === 0 && (
                <Typography variant="body1">
                  {product.description}
                </Typography>
              )}

              {tabValue === 1 && (
                <Box>
                  {product.reviews.map((review, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle1">{review.user}</Typography>
                        <Rating value={review.rating} size="small" readOnly sx={{ ml: 1 }} />
                      </Box>
                      <Typography variant="body2">{review.comment}</Typography>
                      <Divider sx={{ mt: 2 }} />
                    </Box>
                  ))}

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Write a Review
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="Write your review here..."
                      sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary">
                      Submit Review
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 