const SupplementsTable = require('./schema');

// const SupplementsTable = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    const products = await SupplementsTable.model.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await SupplementsTable.model.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'SupplementsTable not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const product = new SupplementsTable.model(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const product = await SupplementsTable.model.deleteMany({});
    if (!product) return res.status(404).json({ message: 'SupplementsTable not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const product = await SupplementsTable.model.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'SupplementsTable not found' });
    res.status(200).json({ message: 'SupplementsTable deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
