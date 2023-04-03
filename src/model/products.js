const Pool = require("../config/db");

const selectDataProduct = (sort, sortby, search) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM product where (name_product) ilike '%${search}%' order by ${sortby} ${sort}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
const insertDataProduct = (dataProducts) => {
  const {
    name_product,
    stock_product,
    sold_product,
    date_product,
    type_product,
  } = dataProducts;

  return Pool.query(
    `INSERT INTO product(name_product, stock_product, sold_product,date_product,type_product)VALUES('${name_product}',${stock_product},${sold_product},'${date_product}','${type_product}')`
  );
};
const updateDataProduct = (id_product, dataProducts) => {
  const {
    name_product,
    stock_product,
    sold_product,
    date_product,
    type_product,
  } = dataProducts;
  return Pool.query(
    `UPDATE product SET name_product='${name_product}',stock_product='${stock_product}',sold_product='${sold_product}',date_product='${date_product}',type_product='${type_product}' WHERE id_product='${id_product}'`
  );
};

const deleteDataProduct = (id_product) =>
  Pool.query(`DELETE FROM product where id_product='${id_product}'`);
module.exports = {
  selectDataProduct,
  insertDataProduct,
  deleteDataProduct,
  updateDataProduct,
};
