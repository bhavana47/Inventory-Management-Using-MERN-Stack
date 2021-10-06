const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  code: { type: String, required: true ,unique: true,trim: true,minlength: 1,maxlength: 10},
  name: { type: String, required: true ,trim: true,minlength: 3,maxlength: 30},
  category: { type: String, required: true ,trim: true,minlength: 3,maxlength: 30},
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;