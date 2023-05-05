const express = require('express')
const router = express.Router()
const Controller = require('../controllers/categoryController')

router.post('/categories', Controller.postCategory)
router.get('/categories', Controller.getCategories)
router.get('/categories/:id', Controller.getCategoryById)
router.delete('/categories/:id', Controller.deleteCategory)
router.put('/categories/:id', Controller.updateCategory)

module.exports = router