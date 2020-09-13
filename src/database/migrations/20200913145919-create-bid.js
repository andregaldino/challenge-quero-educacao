'use strict'

module.exports = {
  up: (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('bids', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      full_price: DataTypes.FLOAT,
      price_with_discount: DataTypes.FLOAT,
      discount_percentage: DataTypes.FLOAT,
      start_date: DataTypes.DATEONLY,
      enrollment_semester: DataTypes.STRING,
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      courseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'id',
        },
        allowNull: false,
      },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('bids')
  },
}
