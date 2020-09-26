import axios from 'axios';

class Products {
  static getProducts (body) {
    return axios.post("/getProducts", body);
  }
}

export default Products;
