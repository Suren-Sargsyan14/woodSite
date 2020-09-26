const express = require('express');
const router = express.Router();

const { Popular } = require('../../model');

router.get('/', async (req, res) => {
  let resultArray = [];
  const result = await Popular.getPopular();

  for (let i = 0; i < result.length; i++) {
    resultArray.push(... await Popular.getProductById(result[i]['product_id']));
  }

  await res.json(resultArray);
});

module.exports = router;
