'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('coupons', {
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('coupons');
  }
};