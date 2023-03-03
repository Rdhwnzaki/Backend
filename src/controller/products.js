// const { createClient } = require("redis");
const modelProduct = require("../model/products");
const { response } = require("../middleware/common");
const { resp } = require("../middleware/common");

const productsController = {
  updateProduct: async (req, res) => {
    try {
      req.body.stock_product = parseInt(req.body.stock_product);
      req.body.sold_product = parseInt(req.body.sold_product);
      await modelProduct.updateDataProduct(req.params.id_product, req.body);
      return response(res, 200, true, req.body, "Input Data Success");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Input Data Fail");
    }
  },
  deleteProduct: (req, res) => {
    modelProduct
      .deleteDataProduct(req.params.id_product)
      .then(() => resp(res, 200, true, "Delete product success"))
      .catch((err) => response(res, 404, false, err, "Delete product failed"));
  },
  getProducts: (req, res) => {
    const sort = req.query.sort || "asc";
    const sortby = req.query.sortby || "id_product";
    const search = req.query.search || "";
    modelProduct
      .selectDataProduct(sort, sortby, search)
      .then((result) =>
        response(res, 200, true, result.rows, "Get product success")
      )
      .catch((err) => response(res, 404, false, err, "Get product failed"));
  },
  insertProduct: async (req, res) => {
    try {
      req.body.stock_product = parseInt(req.body.stock_product);
      req.body.sold_product = parseInt(req.body.sold_product);
      await modelProduct.insertDataProduct(req.body);
      return response(res, 200, true, req.body, "Input Data Success");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Input Data Fail");
    }
  },
};
exports.productsController = productsController;
