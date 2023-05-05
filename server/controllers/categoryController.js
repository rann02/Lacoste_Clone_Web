const { Category } = require('../models')

class Controller {
    static async postCategory(req, res) {
        try {
       const { name } = req.body

            const data = await Category.create({ name })

            res.status(201).json(data)

        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
                res.status(400).json({
                    message: error.errors[0].message
                })
            } else {
                res.status(500).json({
                    message: "internal server error"
                })
            }
        }
    }

    static async getCategories(req, res) {
        try {
            const data = await Category.findAll()

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "internal server error"
            })
        }
    }

    static async getCategoryById(req, res) {
        const { id } = req.params
        try {
            const data = await Category.findByPk(id)

            if (!data) {
                throw { name: "notfound" }
            }

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            if (error.name == "notfound") {
                res.status(404).json({
                    message: "data not found"
                })
            } else {
                res.status(500).json({
                    message: "internal server error"
                })
            }
        }
    }

    static async deleteCategory(req, res) {
        const { id } = req.params
        try {
            const data = await Category.findByPk(id)

            if (!data) {
                throw { name: "notfound" }
            }

            await Category.destroy({ where: { id } })

            res.status(200).json({
                message: `${data.name} has been deleted`
            })
        } catch (error) {
            console.log(error);
            if (error.name == "notfound") {
                res.status(404).json({
                    message: "data not found"
                })
            } else {
                res.status(500).json({
                    message: "internal server error"
                })
            }
        }
    }

    static async updateCategory(req, res) {
        const { id } = req.params
        const { name } = req.body
        try {
            const data = await Category.findByPk(id)

            if (!data) {
                throw { name: "notfound" }
            }

            await Category.update({name}, {where: {id}})

            res.status(200).json({message: 'Category has been updated'})

        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
                res.status(400).json({
                    message: error.errors[0].message
                })
            } else if (error.name == "notfound") {
                res.status(404).json({
                    message: "data not found"
                })
            } else {
                res.status(500).json({
                    message: "internal server error"
                })
            }
        }
    }
}

module.exports = Controller