var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', (req, res) => {
  let page = 1
  let limit = 3
  if (req.query.page) {
    page = req.query.page
  }
  if (req.query.limit) {
    limit = req.query.limit
  }

  return res.status(200).send(recipes.slice((page - 1) * limit, page * limit))
})
module.exports = router;

