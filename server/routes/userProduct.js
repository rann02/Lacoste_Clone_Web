const express = require('express')
const router = express.Router()
const Controller = require('../controllers/productController')
const ControllerCategory = require('../controllers/categoryController')

router.get('/users/products', Controller.getProduct)
router.get('/users/products/:slug', Controller.getProductBySlug)
router.get('/users/categories', ControllerCategory.getCategories )

module.exports = router