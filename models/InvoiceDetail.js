const mongoose = require("mongoose");

const InvoiceDetailSchema = new mongoose.Schema({
  lineNo: { type: Number, required: true },
  productName: { type: String, required: true },
  unitNo: { type: mongoose.Schema.Types.ObjectId, ref: "Unit", required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  total: { type: Number },
  expiryDate: { type: Date, required: true },
});

InvoiceDetailSchema.pre("save", function (next) {
  this.total = this.price * this.quantity;
  next();
});

module.exports = mongoose.model("Invoice", InvoiceDetailSchema);
