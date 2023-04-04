const { Product, Category, User, Image } = require('../models')
const { sequelize } = require('../models')

class Controller {
    static async postProduct(req, res) {
        const t = await sequelize.transaction();
        const authorId = req.user.id
        const { name, description, price, mainImg, categoryId, imgUrls } = req.body
        try {
            const product = await Product.create({
                name,
                description,
                price,
                mainImg,
                categoryId,
                authorId
            }, { transaction: t });

            const dataImage = imgUrls.map(el => {
                el.productId = product.id
                return el
            })

            await Image.bulkCreate(dataImage, { transaction: t });

            await t.commit();

            res.status(201).json(product)
        } catch (error) {
            console.log(error);
            await t.rollback();
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

    static async getProduct(req, res) {
        try {
            const data = await Product.findAll({ include: [User, Category, Image] })

            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "internal server error"
            })
        }
    }

    static async getProductBySlug(req, res) {
        try {
            const { slug } = req.params

            const data = await Product.findOne({
                where: { slug },
                include: Image
            })

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

    static async updateProduct(req, res) {
        try {
            const { slug } = req.params
            const { name, description, price, mainImg, categoryId } = req.body
            const data = await Product.findOne({ where: { slug } })

            if (!data) {
                throw { name: "notfound" }
            }

            await Product.update({ name, description, price, mainImg, categoryId }, { where: { slug } })

            res.status(200).json({ message: "product has been updated" })
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

    static async deleteProduct(req, res) {
        try {
            const { slug } = req.params
            const data = await Product.findOne({ where: { slug } })

            if (!data) {
                throw { name: "notfound" }
            }

            await Product.destroy({ where: { slug } })

            res.status(200).json({ message: "product has been deleted" })
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
}

module.exports = Controller