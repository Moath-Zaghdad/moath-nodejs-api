const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/HealthStore');
    console.log('connected successfully');
  } catch (error) {
    console.error('connection failed:', error.message);
    process.exit(1);
  }
};

connectDB();;


const SupplementsSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
});

exports.model = mongoose.model('supplements', SupplementsSchema);
