const { User } = require('../models')
const { compare } = require('../helpers/hashPassword')
const { createToken } = require('../helpers/jwt')

class Controller {
    static async postUser(req, res) {
        try {
            const { username, email, password, phoneNumber, address } = req.body

            const data = await User.create({username, email, password, phoneNumber, address})

            res.status(201).json(data)

        } catch (error) {
            if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
                res.status(400).json({
                    message: error.errors[0].message
                })
            } else if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
                res.status(400).json({
                    message: error.errors[0].message
                })
            } else {
                res.status(500).json({
                    messsage: "Internal Server Error"
                })
            }
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: "EmailorPasswordRequired" }
            }
            const user = await User.findOne({ where: { email } })
            if (!user) {
                throw { name: "InvalidCredential" }
            }
            const valid = compare(password, user.password)
            if (!valid) {
                throw { name: "InvalidCredential" }
            }
            const payload = {
                id: user.id
            }
            const access_token = createToken(payload)
            res.status(200).json({ token: access_token })

        } catch (error) {
            if (error.name == "EmailorPasswordRequired") {
                res.status(400).json({
                    message: "email or password required"
                })
            } else if (error.name == "InvalidCredential") {
                res.status(401).json({
                    message: "email or password incorrrect"
                })
            } else {
                res.status(500).json({
                    messsage: "Internal Server Error"
                })
            }
        }
    }
}

module.exports = Controller

