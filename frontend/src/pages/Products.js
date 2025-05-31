import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Slider,
  TextField
} from '@mui/material';
import { Link } from 'react-router-dom';

const Products = () => {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: 1999,
      image: '/images/aviator.jpg',
      category: 'sunglasses'
    },
    {
      id: 2,
      name: 'Round Metal Frame',
      price: 2499,
      image: '/images/round.jpg',
      category: 'eyeglasses'
    },
    // Add more products here
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>

      {/* Filters */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="eyeglasses">Eyeglasses</MenuItem>
              <MenuItem value="sunglasses">Sunglasses</MenuItem>
              <MenuItem value="contact-lenses">Contact Lenses</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography gutterBottom>Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={10000}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>₹{priceRange[0]}</Typography>
            <Typography>₹{priceRange[1]}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Products Grid */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{product.price}
                </Typography>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 