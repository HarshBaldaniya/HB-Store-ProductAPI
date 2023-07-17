require("dotenv").config()
const express = require("express");
const app = express();
const productRoutes = require("./routes/productsRoute");
const connectDb = require("./db/database")

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hiii!");
});

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI)
    app.listen(PORT, () => {
      console.log(`Server Connected At ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }  
};

start();
