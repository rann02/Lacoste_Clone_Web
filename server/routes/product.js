const express = require('express')
const router = express.Router()
const Controller = require('../controllers/productController')

router.post('/products', Controller.postProduct)
router.get('/products', Controller.getProduct)
router.get('/products/:slug', Controller.getProductBySlug)
router.put('/products/:slug', Controller.updateProduct)
router.delete('/products/:slug', Controller.deleteProduct)

module.exports = router