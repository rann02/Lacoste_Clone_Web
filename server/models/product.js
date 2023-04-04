'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: 'authorId' })
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Product.hasMany(models.Image, { foreignKey: 'productId' })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "name required"
        },
        notNull: {
          msg: "name required"
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "description required"
        },
        notNull: {
          msg: "description required"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "price required"
        },
        notNull: {
          msg: "price required"
        },
        min: {
          args: 150000,
          msg: "min Rp. 150.000"
        }
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "image url required"
        },
        notNull: {
          msg: "image url required"
        }
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.beforeCreate((product, options) => {
      const slugResult = product.name.split(' ').join('-')
      product.slug = slugResult
  });

  return Product;
};