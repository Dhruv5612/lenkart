import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
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
    {
      id: 3,
      name: 'Daily Disposable Lenses',
      price: 999,
      image: '/images/lenses.jpg',
      category: 'contact-lenses'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Lenskart
          </Typography>
          <Typography variant="h5" gutterBottom>
            Discover the perfect eyewear for your style
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/products"
            sx={{ mt: 2 }}
          >
            Shop Now
          </Button>
        </Container>
      </div>

      {/* Featured Products */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
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
    </div>
  );
};

export default Home; 