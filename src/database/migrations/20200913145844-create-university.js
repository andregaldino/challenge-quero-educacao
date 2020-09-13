'use strict'

module.exports = {
  up: (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('universities', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      score: DataTypes.FLOAT,
      logo_url: DataTypes.STRING,
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('universities')
  },
}
