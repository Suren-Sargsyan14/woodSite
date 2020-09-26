import axios from 'axios';

class Popular {
  static getPopular () {
   return axios.get("/getPopular");
  }
}

export default Popular;
