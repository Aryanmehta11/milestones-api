const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Middleware
app.use(express.json()); // To parse JSON request bodies

// Routes
const milestoneRoutes = require('./routes/milestones');
app.use('/api/milestones', milestoneRoutes);

// Basic route - Home route (GET)
app.get('/', (req, res) => {
  res.send('Welcome to the Milestones API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
