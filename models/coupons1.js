'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupons.init({
    coupon_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    coupon_code: {
      type: DataTypes.STRING,
      allowNull:false

    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    start: {
      type: DataTypes.DATE,
      allowNull:false
    },
    end: {
      type: DataTypes.DATE,
      allowNull:false
    },
    disc_percent: {
      type: DataTypes.FLOAT,
      allowNull:true
    },
    flat_discount: {
      type: DataTypes.FLOAT,
      allowNull:true
    },
    customer_no: {
      type: DataTypes.STRING,
      allowNull:true
    },
    employee_id: {
      type: DataTypes.UUID,
      allowNull:true
    },
    branch_id: {
      type: DataTypes.UUID,
      allowNull:false
    },
    min_cart: {
      type: DataTypes.FLOAT,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Coupons',
    tableName: "coupons"
  });
  return Coupons;
};