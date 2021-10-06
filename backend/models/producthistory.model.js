const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productHistorySchema = new Schema({
  productcode: { type: String, required: true},
  username: { type: String, required: true},
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const productHistory = mongoose.model('Product History', productHistorySchema);

module.exports = productHistory;