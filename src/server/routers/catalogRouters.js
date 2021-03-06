const express = require('express')
const Catalog = require('../models/catalog')
const router = new express.Router()
const auth = require('../middleware/auth')


/* GET home page. */
router.get('/health', function (req, res, next) {
  res.send('Express RESTful API');
});



/**
 * This function comment is parsed by doctrine
 * @route GET /catalog
 * @group User Me
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/catalog', async (req, res) => {
  Catalog.find({}, (err,catalogs) =>{
    res.send(catalogs);
  });

})


module.exports = router
