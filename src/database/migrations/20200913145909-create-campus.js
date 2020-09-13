'use strict'

module.exports = {
  up: (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('campuses', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      city: DataTypes.STRING,
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('campuses')
  },
}
