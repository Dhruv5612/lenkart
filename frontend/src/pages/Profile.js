import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent
} from '@mui/material';

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, City, State'
  });

  // Mock order history
  const orders = [
    {
      id: 'ORD001',
      date: '2024-03-15',
      total: 4498,
      status: 'Delivered',
      items: [
        { name: 'Classic Aviator', price: 1999, quantity: 1 },
        { name: 'Round Metal Frame', price: 2499, quantity: 1 }
      ]
    }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Add profile update logic here
    console.log('Profile update:', profileData);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Profile
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Tabs
              orientation="vertical"
              value={tabValue}
              onChange={handleTabChange}
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Account Details" />
              <Tab label="Order History" />
              <Tab label="Addresses" />
              <Tab label="Payment Methods" />
            </Tabs>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3 }}>
            {tabValue === 0 && (
              <form onSubmit={handleProfileUpdate}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Update Profile
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}

            {tabValue === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Order History
                </Typography>
                {orders.map((order) => (
                  <Card key={order.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="subtitle1">
                            Order #{order.id}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Date: {order.date}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="subtitle1" align="right">
                            Total: ₹{order.total}
                          </Typography>
                          <Typography
                            variant="body2"
                            color={order.status === 'Delivered' ? 'success.main' : 'warning.main'}
                            align="right"
                          >
                            {order.status}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: 2 }} />
                      <List>
                        {order.items.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemText
                              primary={item.name}
                              secondary={`Quantity: ${item.quantity}`}
                            />
                            <Typography>₹{item.price}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            )}

            {tabValue === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Saved Addresses
                </Typography>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">
                      {profileData.address}
                    </Typography>
                    <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                      Edit
                    </Button>
                  </CardContent>
                </Card>
                <Button variant="contained" color="primary">
                  Add New Address
                </Button>
              </Box>
            )}

            {tabValue === 3 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Payment Methods
                </Typography>
                <Button variant="contained" color="primary">
                  Add New Payment Method
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 