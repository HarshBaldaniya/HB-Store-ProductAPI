const express = require("express");
const router = express.Router();
const list = require("../controllers/productsController")

router.route("/").get(list);

module.exports = router;
