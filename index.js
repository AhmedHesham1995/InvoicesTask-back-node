const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const invoicesRoutes = require("./routes/invoiceDetailsRoutes");
const unitsRoutes = require("./routes/unitRoutes");
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://ahmedhesham1419:tasktasktask@cluster0.p31ih.mongodb.net/TaskDatabase"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error: ", err);
  });

app.use("/units", unitsRoutes);
app.use("/Invoices", invoicesRoutes);
app.listen(5000, () => {
  console.log("listening at port 5000");
});
