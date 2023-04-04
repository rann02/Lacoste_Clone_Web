const { User } = require('../models/index')
const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        if (!access_token) {
            throw { name: "InvalidToken" }
        }
        const payload = verifyToken(access_token)
        const user = await User.findByPk(payload.id)

        req.user = {
            id: user.id,
            email: user.email
        }
        next()
    } catch (error) {
        if(['JsonWebTokenError', 'InvalidToken'].includes(error.name)){
            res.status(401).json({message: 'invalid token'})
        } else {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

module.exports = authentication