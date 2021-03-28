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

/**
 * This function comment is parsed by doctrine
 * @route POST /catalog
 * @group Catalog creation - Catalog creation
 * @param {Catalog.model} Catalog.required - name
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
 router.post('/catalog', async (req, res) => {
  //console.log(req.body)
  const catalog = new Catalog(req.body)
  //console.log(catalog)
  try {
    const catalogCreated = await catalog.save();

    //res.status(201).sendStatus(catalogCreated)
    res.sendStatus(201)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }

})


module.exports = router
