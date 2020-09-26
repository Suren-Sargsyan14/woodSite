const express = require('express');
const router = express.Router();

const Routes = ['/getPopular', '/getProducts'];

Routes.forEach(route => router.use(route, require(`.${route}`)));

module.exports = router;
