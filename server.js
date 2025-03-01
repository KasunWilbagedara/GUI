import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Order Schema
const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  phone: String,
  totalAmount: Number,
  items: [{ id: String, name: String, price: Number, quantity: Number }]
});
const Order = mongoose.model('Order', orderSchema);

// ✅ Food Schema
const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});
const Food = mongoose.model('Food', foodSchema);

// 📌 API to Fetch Food Items
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: '❌ Error fetching food items' });
  }
});

// 📌 API to Place Order
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: '✅ Order placed successfully!', order });
  } catch (error) {
    res.status(500).json({ message: '❌ Internal server error' });
  }
});

// Server Setup
const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
