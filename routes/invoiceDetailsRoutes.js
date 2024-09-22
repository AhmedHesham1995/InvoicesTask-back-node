const express = require("express");
const Invoice = require("../models/InvoiceDetail");
const router = express.Router();

router.get("/", async (req, res) => {
  const invoices = await Invoice.find().populate("unitNo");

  res.status(200).json(invoices);
});

router.post("/", async (req, res) => {
  const { lineNo, productName, unitNo, expiryDate, quantity, total, price } =
    req.body;

  const invoice = new Invoice({
    lineNo,
    productName,
    unitNo,
    expiryDate,
    quantity,
    total,
    price,
  });

  await invoice.save();

  res.status(201).json(invoice);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Invoice.findOneAndDelete(id);
  res.status(203).end();
});

module.exports = router;
