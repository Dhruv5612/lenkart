import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Box,
  Divider,
  TextField
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: 1999,
      image: 'https://placehold.co/400x400/000000/FFFFFF/png?text=Aviator+Glasses',
      quantity: 1
    },
    {
      id: 2,
      name: 'Round Metal Frame',
      price: 2499,
      image: 'https://placehold.co/400x400/000000/FFFFFF/png?text=Round+Glasses',
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{item.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small">
                        <Remove />
                      </IconButton>
                      <TextField
                        size="small"
                        value={item.quantity}
                        inputProps={{ min: 1, style: { textAlign: 'center' } }}
                        sx={{ width: '60px', mx: 1 }}
                      />
                      <IconButton size="small">
                        <Add />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle1">
                        ₹{item.price * item.quantity}
                      </Typography>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              
              <Box sx={{ my: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Subtotal</Typography>
                  <Typography>₹{subtotal}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Shipping</Typography>
                  <Typography>₹{shipping}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">₹{total}</Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart; 