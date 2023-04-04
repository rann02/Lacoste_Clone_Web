const bcrypt = require('bcryptjs');

const hash = (password) => {
    return bcrypt.hashSync(password, 8)
}

const compare = (password, hashpassword) => {
    return bcrypt.compareSync(password, hashpassword)
}

module.exports = { hash, compare }