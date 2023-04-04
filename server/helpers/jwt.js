const jwt = require('jsonwebtoken');
const secret = process.env.SECRET

module.exports = {
    createToken: (payload) => jwt.sign(payload, secret),
    verifyToken: (token) => jwt.verify(token, secret)
}