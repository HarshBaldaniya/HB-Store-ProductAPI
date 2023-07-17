const productModel = require("../models/productModel");

const list = async (req, res) => {
  try {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    let myData = productModel.find(queryObject);

    if (company) {
      queryObject.company = { $regex: company, $options: "i" };
    }

    if (featured) {
      queryObject.featured = featured;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    if (sort) {
      let sortFix = sort.split(",").join(" ");
      myData = myData.sort(sortFix);
    }

    if (select) {
      let selectFix = select.split(",").join(" ");
      myData = myData.select(selectFix);
    }

    // Pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
    let skip = (page - 1) * limit;
    myData = myData.skip(skip).limit(limit);

    const product = await myData;
    res.status(200).json({ product, nbHits: product.length });
  } catch (err) {
    console.error(err);
  }
};

module.exports = list;
