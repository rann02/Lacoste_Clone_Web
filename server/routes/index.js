const express = require('express')
const router = express.Router()
const category = require('./category')
const product = require('./product')
const user = require('./user')
const authentication = require('../middleware/authen')
const userProduct = require('./userProduct')

router.use(user)
router.use(userProduct)
router.use(authentication)
router.use(product)
router.use(category)

module.exports = router