const mongoose = require("mongoose");

const connectDb = (uri) => {
  console.log("Connect to Database")
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "products",
  });
};

module.exports = connectDb;
