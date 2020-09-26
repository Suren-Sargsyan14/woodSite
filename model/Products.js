const connection = require('./connection');

class Popular {
  static getProducts (page) {
    return new Promise(resolve => {
      connection.query(`SELECT * FROM products LIMIT ${page*12}, 12`, (err, res) => {
        if(err) throw err;
        resolve(res);
      });
    })
  }
  static getProductCount () {
    return new Promise( resolve => {
      connection.query(`SELECT COUNT(*) FROM products`, (err, res) => {
        if(err) throw err;
        resolve(res);
      })
    });
  }
}

module.exports = Popular;
