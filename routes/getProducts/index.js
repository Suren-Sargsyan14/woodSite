const express = require('express');
const router = express.Router();

const { Products } = require('../../model');

router.post('/', async (req, res) => {
  const { page } = req.body;
  console.log(req.body);
  const result = await Products.getProducts(page);
  const count = await Products.getProductCount();
  // console.log(result, count);

  await res.json([...result, ...count]);
});

module.exports = router;
