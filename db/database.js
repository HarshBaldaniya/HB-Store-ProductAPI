const mongoose = require("mongoose");

const connectDb = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "products",
  });
  const db = mongoose.connection;
  db.on("error", (err) => console.error(err));
  db.once("open", () => console.log("Connect to Database"));
};

module.exports = connectDb;
