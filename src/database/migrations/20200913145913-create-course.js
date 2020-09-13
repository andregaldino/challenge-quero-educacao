'use strict'

module.exports = {
  up: (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('courses', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      kind: DataTypes.STRING,
      level: DataTypes.STRING,
      shift: DataTypes.STRING,
      campusId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'campuses',
          key: 'id',
        },
        allowNull: false,
      },
      universityId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'universities',
          key: 'id',
        },
        allowNull: false,
      },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('courses')
  },
}
