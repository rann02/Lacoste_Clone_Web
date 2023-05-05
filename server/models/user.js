'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/hashPassword')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {foreignKey: 'authorId'})
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "email has already been used"
      },
      validate: {
        notEmpty: {
          msg: "email required"
        },
        notNull: {
          msg: "email required"
        },
        isEmail: {
          msg: "format must be email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "password required"
        },
        notNull: {
          msg: "password required"
        },
        len: {
          args: [5, 20],
          msg: "min 5 characters, max 20 characters"
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user, options) => {
    user.password = hash(user.password)
    user.role = 'admin'
  });

  return User;
};