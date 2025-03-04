import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'; 


dotenv.config();


const app = express();


app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

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
  items: [{ id: String, name: String, price: Number, quantity: Number }],
});
const Order = mongoose.model('Order', orderSchema);

// Food Schema
const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});
const Food = mongoose.model('Food', foodSchema);

// Reservation Schema
const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  time: String,
  guests: Number,
  specialRequests: String,
  createdAt: { type: Date, default: Date.now },
});
const Reservation = mongoose.model('Reservation', reservationSchema);

// API to Register User
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: '✅ User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: '❌ Error registering user' });
  }
});

// API to Login User
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: '❌ User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '❌ Invalid credentials' });
    }
    res.status(200).json({ message: '✅ Login successful!' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: '❌ Error logging in' });
  }
});

// API to Fetch Food Items
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: '❌ Error fetching food items' });
  }
});

// API to Place Order
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: '✅ Order placed successfully!', order });
  } catch (error) {
    res.status(500).json({ message: '❌ Internal server error' });
  }
});

// API to Create Reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const reservation = new Reservation({
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time,
      guests: req.body.guests,
      specialRequests: req.body.specialRequests,
    });
    await reservation.save();
    res.status(201).json({ message: '✅ Reservation created successfully!', reservation });
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(500).json({ message: '❌ Error creating reservation' });
  }
});

// Server Setup
const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});