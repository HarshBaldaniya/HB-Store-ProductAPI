require("dotenv").config()
const connectDb = require("./db/database")
const productModel = require("./models/productModel")
const productsModel = require("./models/productModel")
const productJson = require("./products.json")

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URI)
        await productModel.deleteMany()
        await productsModel.create(productJson)
        console.log("Add Data to Database Successfully");
    } catch (err) {
        console.error(err)
    }
}

start()