const connection = require('./connection');

class Popular {
  static getPopular () {
    return new Promise(resolve => {
      connection.query(`SELECT * FROM popular_products`, (err, res) => {
        if(err) throw err;
        resolve(res);
      });
    })
  }
  static getProductById (id) {
    return new Promise(resolve => {
      connection.query(`SELECT * FROM products WHERE id=${id}`, (err, res) => {
        if(err) throw err;
        resolve(res);
      })
    });
  }
}

module.exports = Popular;
