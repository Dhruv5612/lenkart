const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');

// Get cart items
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('cart.items.product');
    res.json(user.cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add item to cart
router.post('/add', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.user.id);
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if product is already in cart
    const existingItem = user.cart.items.find(
      item => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.items.push({
        product: productId,
        quantity
      });
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update cart item quantity
router.put('/update/:productId', async (req, res) => {
  try {
    const { quantity } = req.body;
    const user = await User.findById(req.user.id);
    const cartItem = user.cart.items.find(
      item => item.product.toString() === req.params.productId
    );

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    cartItem.quantity = quantity;
    await user.save();
    res.json(user.cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from cart
router.delete('/remove/:productId', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.cart.items = user.cart.items.filter(
      item => item.product.toString() !== req.params.productId
    );

    await user.save();
    res.json(user.cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear cart
router.delete('/clear', async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.cart.items = [];
    await user.save();
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;