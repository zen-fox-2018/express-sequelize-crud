'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Teachers',
      'password',
     Sequelize.STRING
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Teachers',
      'password',
    )
  }
};
